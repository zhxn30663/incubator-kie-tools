/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { OperatingSystem } from "@kie-tools-core/operating-system";
import { ChannelKeyboardEvent } from "../api";
import { KeyboardShortcutRegisterOpts } from "./KeyboardShortcutRegisterOpts";
import { KeyboardShortcutsService } from "./KeyboardShortcutsService";

export interface KeyBinding {
  combination: string;
  label: string;
  opts?: KeyboardShortcutRegisterOpts;
  listener: (e: KeyboardEvent) => boolean;
}

export enum ModKeys {
  CTRL = "ctrl",
  META = "meta",
  ALT = "alt",
  SHIFT = "shift",
}

const MODIFIER_KEY_NAMES = new Map<string, string>([
  ["AltLeft", "alt"],
  ["AltRight", "alt"],
  ["CtrlLeft", "ctrl"],
  ["CtrlRight", "ctrl"],
  ["MetaLeft", "meta"],
  ["MetaRight", "meta"],
  ["ShiftLeft", "shift"],
  ["ShiftRight", "shift"],
]);

const KEY_CODES = new Map<string, string>([
  ["/", "Slash"],
  ["esc", "Escape"],
  ["delete", "Delete"],
  ["backspace", "Backspace"],
  ["space", "Space"],
  ["right", "ArrowRight"],
  ["left", "ArrowLeft"],
  ["up", "ArrowUp"],
  ["down", "ArrowDown"],
  ["a", "KeyA"],
  ["b", "KeyB"],
  ["c", "KeyC"],
  ["d", "KeyD"],
  ["e", "KeyE"],
  ["f", "KeyF"],
  ["g", "KeyG"],
  ["h", "KeyH"],
  ["i", "KeyI"],
  ["j", "KeyJ"],
  ["k", "KeyK"],
  ["l", "KeyL"],
  ["m", "KeyM"],
  ["n", "KeyN"],
  ["o", "KeyO"],
  ["p", "KeyP"],
  ["q", "KeyQ"],
  ["r", "KeyR"],
  ["s", "KeyS"],
  ["t", "KeyT"],
  ["u", "KeyU"],
  ["v", "KeyV"],
  ["w", "KeyW"],
  ["x", "KeyX"],
  ["y", "KeyY"],
  ["z", "KeyZ"],
]);

const IGNORED_TAGS = ["INPUT", "TEXTAREA", "SELECT", "OPTION"];

export class DefaultKeyboardShortcutsService implements KeyboardShortcutsService {
  private eventIdentifiers = 1;

  private readonly keyBindings = new Map<number, KeyBinding>();

  constructor(private readonly args: { os?: OperatingSystem }) {}

  public registerKeyDownThenUp(
    combination: string,
    label: string,
    onKeyDown: (target: EventTarget | null) => Promise<void>,
    onKeyUp: (target: EventTarget | null) => Promise<void>,
    opts?: KeyboardShortcutRegisterOpts
  ) {
    console.debug(`注册快捷键 (按下/释放) ${combination} - ${label}: ${opts?.repeat}`);

    const keyBinding = {
      combination,
      label,
      listener: (event: KeyboardEvent | CustomEvent<ChannelKeyboardEvent>) => {
        const keyboardEvent = getProcessableKeyboardEvent(combination, event, opts);
        if (!keyboardEvent) {
          return true;
        }

        if (keyboardEvent.type === "keydown") {
          if (setsEqual(this.combinationKeySet(combination), this.pressedKeySet(keyboardEvent))) {
            console.debug(`触发 (按下) [${combination}]!`);
            onKeyDown(keyboardEvent.target);
            return false;
          }
        } else if (keyboardEvent.type === "keyup") {
          if (
            this.combinationKeySet(combination).has(MODIFIER_KEY_NAMES.get(keyboardEvent.code) ?? "") ||
            this.combinationKeySet(combination).has(keyboardEvent.code)
          ) {
            console.debug(`触发 (释放) [${combination}]!`);
            onKeyUp(keyboardEvent.target);
            return false;
          }
        }

        return true;
      },
      opts,
    };

    this.keyBindings.set(this.eventIdentifiers, keyBinding);

    this.keyBindingElement(keyBinding).addEventListener("keydown", keyBinding.listener);
    this.keyBindingElement(keyBinding).addEventListener("keyup", keyBinding.listener);

    return this.eventIdentifiers++;
  }

  public registerKeyPress(
    combination: string,
    label: string,
    onKeyPress: (target: EventTarget | null) => Promise<void>,
    opts?: KeyboardShortcutRegisterOpts
  ) {
    console.debug(`注册快捷键 (按下) ${combination} - ${label}: ${opts?.repeat}`);

    const keyBinding = {
      combination,
      label,
      listener: (event: KeyboardEvent | CustomEvent<ChannelKeyboardEvent>) => {
        const keyboardEvent = getProcessableKeyboardEvent(combination, event, opts);
        if (!keyboardEvent) {
          return true;
        }

        if (setsEqual(this.combinationKeySet(combination), this.pressedKeySet(keyboardEvent))) {
          console.debug(`触发 (按下) [${combination}]!`);
          onKeyPress(keyboardEvent.target);
          return false;
        }

        return true;
      },
      opts,
    };

    this.keyBindings.set(this.eventIdentifiers, keyBinding);

    this.keyBindingElement(keyBinding).addEventListener("keydown", keyBinding.listener);

    return this.eventIdentifiers++;
  }

  public registerKeyPressOnce(
    combination: string,
    onKeyPress: (target: EventTarget | null) => Promise<void>,
    opts?: KeyboardShortcutRegisterOpts
  ) {
    const id = this.registerKeyPress(
      combination,
      "",
      async (target) => {
        onKeyPress(target);
        this.deregister(id);
      },
      opts ? { ...opts!, hidden: true } : opts
    );

    return id;
  }

  public deregister(id: number): void {
    const keyBinding = this.keyBindings.get(id);
    if (!keyBinding) {
      console.error(`无法注销ID为${id}的键盘快捷键，因为它未被注册。`);
      return;
    }

    this.keyBindingElement(keyBinding).removeEventListener("keypress", keyBinding?.listener);
    this.keyBindingElement(keyBinding).removeEventListener("keydown", keyBinding?.listener);
    this.keyBindingElement(keyBinding).removeEventListener("keyup", keyBinding?.listener);
    this.keyBindings.delete(id);
  }

  private keyBindingElement(keyBinding?: KeyBinding) {
    return keyBinding?.opts?.element ?? window;
  }

  private combinationKeySet(combination: string) {
    const keys = combination
      .split("+")
      .map((k) => k.toLowerCase())
      .map((k) => KEY_CODES.get(k) ?? k);

    if (this.args.os === OperatingSystem.MACOS) {
      return new Set(keys.map((k) => (k === ModKeys.CTRL ? ModKeys.META : k)));
    } else {
      return new Set(keys);
    }
  }

  private pressedKeySet(e: KeyboardEvent) {
    const pressedKeySet = new Set();
    if (e.ctrlKey) {
      pressedKeySet.add(ModKeys.CTRL);
    }
    if (e.metaKey) {
      pressedKeySet.add(ModKeys.META);
    }
    if (e.altKey) {
      pressedKeySet.add(ModKeys.ALT);
    }
    if (e.shiftKey) {
      pressedKeySet.add(ModKeys.SHIFT);
    }
    if (Array.from(MODIFIER_KEY_NAMES.keys()).indexOf(e.code) === -1) {
      pressedKeySet.add(e.code);
    }
    return pressedKeySet;
  }

  public registered() {
    return Array.from(this.keyBindings.values());
  }

  public isEnabled(): boolean {
    return true;
  }
}

function getProcessableKeyboardEvent(
  combination: string,
  event: KeyboardEvent | CustomEvent<ChannelKeyboardEvent>,
  opts?: KeyboardShortcutRegisterOpts
): KeyboardEvent | null {
  if (event instanceof CustomEvent && IGNORED_TAGS.includes(event.detail.channelOriginalTargetTagName!)) {
    console.debug(`忽略执行 (${combination})，因为目标是 ${event.detail.channelOriginalTargetTagName}`);
    return null;
  }

  const keyboardEvent = event instanceof CustomEvent ? new KeyboardEvent(event.detail.type, event.detail) : event;
  if (keyboardEvent.target instanceof Element && IGNORED_TAGS.includes(keyboardEvent.target.tagName)) {
    console.debug(`忽略执行 (${combination})，因为目标是 ${keyboardEvent.target.tagName}`);
    return null;
  }

  if (keyboardEvent.repeat && !opts?.repeat) {
    return null;
  }

  return keyboardEvent;
}

function setsEqual(lhs: Set<unknown>, rhs: Set<unknown>) {
  if (lhs.size !== rhs.size) {
    return false;
  }

  for (const a of lhs) {
    if (!rhs.has(a)) {
      return false;
    }
  }

  return true;
}

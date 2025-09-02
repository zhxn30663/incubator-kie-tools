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
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { Text, TextContent, TextVariants } from "@patternfly/react-core/dist/js/components/Text";
import { Stack, StackItem } from "@patternfly/react-core/dist/js/layouts/Stack";
import { ActionGroup, Form, FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import "./OutputsBatchAdd.scss";

interface OutputsBatchAddProps {
  onAdd: (types: string) => void;
  onCancel: () => void;
}

const OutputsBatchAdd = ({ onAdd, onCancel }: OutputsBatchAddProps) => {
  const [input, setInput] = useState("");
  const [inputValidation, setInputValidation] = useState<"success" | "error" | "default">("default");

  useEffect(() => {
    document.querySelector<HTMLInputElement>(`#outputs`)?.focus();
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const validateInput = () => {
    const validation = input.trim().length > 0 ? "success" : "error";
    setInputValidation(validation);
    return validation;
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (validateInput() === "success") {
      onAdd(input);
    }
    event.preventDefault();
  };

  return (
    <section>
      <Stack hasGutter={true}>
        <StackItem>
          <TextContent>
            <Text component={TextVariants.h3}>添加多个输出字段</Text>
            <Text component={TextVariants.p}>
              您可以通过在下方输入名称来添加多个输出。每行一个。
              <br />
              它们将以默认类型<em>字符串</em>创建。您可以稍后编辑它们。
            </Text>
          </TextContent>
        </StackItem>
        <StackItem>
          <Form onSubmit={handleSubmit} style={{ gridGap: 0 }}>
            <FormGroup
              label="输出"
              fieldId="outputs"
              isRequired={true}
              validated={inputValidation}
              helperTextInvalid={"请输入至少一个输出名称"}
            >
              <TextArea
                className="outputs-container__multiple-outputs"
                value={input}
                onChange={handleInputChange}
                name="outputs"
                isRequired={true}
                id="outputs"
                placeholder={"第一个输出\n第二个输出\n..."}
              />
            </FormGroup>
            <ActionGroup>
              <Button variant="primary" type="submit">
                添加它们
              </Button>
              <Button variant="link" onClick={() => onCancel()}>
                取消
              </Button>
            </ActionGroup>
          </Form>
        </StackItem>
      </Stack>
    </section>
  );
};

export default OutputsBatchAdd;

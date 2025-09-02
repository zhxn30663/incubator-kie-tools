/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export enum FeelSyntacticSymbolNature {
  /**
   * 未识别的符号。
   */
  Unknown,

  /**
   * 在决策或输入节点中定义的符号。
   */
  GlobalVariable,

  /**
   * 决策服务和业务知识模型是可调用的。
   */
  Invocable,

  /**
   * 局部变量。
   */
  LocalVariable,

  /**
   * 函数参数。
   */
  Parameter,

  /**
   * 解析器当前不知道是否有效的变量，因为它们在运行时进行验证。
   */
  DynamicVariable,

  /**
   * 不可见变量是仅用于变量库的树结构目的的变量，
   * 用户无法使用。
   */
  InvisibleVariables,
}

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

import { BoxedExpressionEditorI18n } from "..";
import { en as en_common } from "@kie-tools/i18n-common-dictionary";

export const en: BoxedExpressionEditorI18n = {
  ...en_common,
  addParameter: "添加参数",
  builtInAggregator: "内置聚合器",
  builtInAggregatorHelp: {
    sum: "输出所有收集值的总和。值必须是数值。",
    count: "输出匹配规则的数量。",
    min: "输出匹配项中的最小值。结果值必须可比较，如数字、日期或文本（字典序）。",
    max: "输出匹配项中的最大值。结果值必须可比较，如数字、日期或文本（字典序）。",
    none: "在任意列表中聚合值。",
  },
  choose: "选择...",
  class: "类",
  columnOperations: {
    delete: "删除",
    insertLeft: "向左插入",
    insertRight: "向右插入",
  },
  columns: "列",
  context: "上下文",
  contextEntry: "上下文条目",
  dataType: "数据类型",
  dataTypeDropDown: {
    builtIn: "内置",
    custom: "自定义",
  },
  decisionRule: "决策规则",
  decisionTable: "决策表",
  delete: "删除",
  document: "文档",
  editClause: {
    input: "编辑输入子句",
    output: "编辑输出子句",
  },
  editContextEntry: "编辑上下文条目",
  editExpression: "编辑表达式",
  editHitPolicy: "编辑命中策略",
  editParameter: "编辑参数",
  editParameters: "编辑参数",
  editRelation: "编辑关系",
  enterFunction: "函数名称",
  enterText: "输入文本",
  function: "函数",
  hitPolicy: "命中策略",
  hitPolicyHelp: {
    unique: "仅允许一个规则匹配。任何重叠都会引发错误。",
    first: "使用规则顺序中的第一个匹配。",
    priority:
      "允许多个规则匹配，但输出不同。选择输出值列表中排在前面的输出。",
    any: "允许多个规则匹配，但它们必须都有相同的输出。如果多个匹配规则没有相同的输出，则引发错误。",
    collect: "基于聚合函数聚合来自多个规则的输出。",
    ruleOrder:
      "按照规则顺序将来自多个规则的输出收集到列表中。它与“收集”非常相似，但没有任何聚合函数，但在最终列表中有明确的一致排序，如表中定义的那样。",
    outputOrder:
      "使用与“优先级”命中策略相同的排序机制将来自多个规则的输出收集到有序列表中。",
  },
  inputClause: "输入子句",
  invocation: "调用",
  insert: "插入",
  insertDirections: {
    above: "上方",
    below: "下方",
    toTheLeft: "左侧",
    toTheRight: "右侧",
  },
  list: "列表",
  literal: "字面值",
  manage: "管理",
  methodSignature: "方法签名",
  model: "模型",
  name: "名称",
  noParametersDefined: "未定义参数。",
  outputClause: "输出子句",
  parameters: "参数",
  pmml: {
    firstSelection: "首先选择PMML文档",
    secondSelection: "然后选择PMML模型",
  },
  relation: "关系",
  rowOperations: {
    reset: "重置",
    delete: "删除",
    duplicate: "复制",
    insertAbove: "上方插入",
    insertBelow: "下方插入",
  },
  rows: "行",
  ruleAnnotation: "规则注释",
  selectExpression: "选择表达式",
  selectFunctionKind: "选择函数类型",
  selectLogicType: "选择逻辑类型",
};

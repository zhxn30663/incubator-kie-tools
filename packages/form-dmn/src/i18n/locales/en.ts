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

import { en as en_common } from "@kie-tools/i18n-common-dictionary";
import { FormDmnI18n } from "../FormDmnI18n";
import { wrapped } from "@kie-tools-core/i18n/dist/core";

export const en: FormDmnI18n = {
  ...en_common,
  form: {
    status: {
      autoGenerationError: {
        title: `${en_common.terms.oops}!`,
        explanation: "由于错误，无法渲染表单。",
        checkNotificationPanel: ["在通知面板中检查", wrapped("link"), "错误"],
      },
      emptyForm: {
        title: "无表单",
        explanation: `关联的${en_common.names.dmn}没有任何输入。`,
      },
      validatorError: {
        title: "尝试生成表单时发生错误",
        message: [
          `此${en_common.names.dmn}模型包含尚不支持的构造。请参考`,
          wrapped("jira"),
          "并报告问题。请不要忘记上传当前文件。",
        ],
      },
    },
  },
  validation: {
    xDmnAllowedValues: "不属于允许值集合",
    xDmnTypeConstraint: "不属于类型约束集合",
    daysAndTimeError: "应匹配格式 P1D(天)T2H(小时)3M(分钟)1S(秒)",
    yearsAndMonthsError: "应匹配格式 P1Y(年)2M(月)",
  },
  schema: {
    selectPlaceholder: "请选择...",
  },
  dmnSchema: {
    daysAndTimePlaceholder: "P1DT5H 或 P2D 或 PT1H2M10S",
    yearsAndMonthsPlaceholder: "P1Y5M 或 P2Y 或 P1M",
  },
  result: {
    evaluation: {
      success: "评估成功",
      skipped: "评估已跳过",
      failed: "评估失败",
    },
    error: {
      title: `${en_common.terms.oops}!`,
      explanation: "由于错误，无法渲染结果。",
      message: [
        `此结果包含尚不支持的构造。请参考`,
        wrapped("jira"),
        "并报告问题。请不要忘记上传当前文件和使用的输入",
      ],
    },
    dateTooltip: ["此值为UTC时间。您当前时区的值为", wrapped("date")],
    withoutResponse: {
      title: "无响应",
      explanation: "响应在决策评估后显示。",
    },
  },
};

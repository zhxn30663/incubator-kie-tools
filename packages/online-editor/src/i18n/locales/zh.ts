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

import { OnlineI18n } from "..";
import { zh as zh_common } from "@kie-tools/i18n-common-dictionary";
import { en as en_unitables } from "@kie-tools/unitables/dist/i18n/locales/en";
import { wrapped } from "@kie-tools-core/i18n/dist/core";
import { en } from "./en";

export const zh: OnlineI18n = {
  ...en,
  ...zh_common,
  editorPage: {
    ...en.editorPage,
    textEditorModal: {
      title: (fileName: string) => `编辑 ${fileName}`,
    },
    alerts: {
      ...en.editorPage.alerts,
      setContentError: {
        title: "打开文件出错。您可以先以文本方式编辑并在修复后重新打开图表。",
        action: "以文本打开",
      },
      copy: "内容已复制到剪贴板",
      updateGist: "Gist 更新成功。",
      createGist: "Gist 创建成功。",
      errorPushingGist: "推送当前 Gist 更新失败。是否强制推送？",
      updateSnippet: "代码片段更新成功。",
      createSnippet: "代码片段创建成功。",
      errorPushingSnippet: "推送当前代码片段失败。是否强制推送？",
      forcePushWarning: "警告：这将使用本地更改覆盖远程 Gist！",
      invalidCurrentGist: `当前 gist 的 ${zh_common.names.url} 无效。如果已更改文件名，请同时更新 ${zh_common.names.url}。`,
      invalidGistFilename: "文件名无效。该 Gist 已包含同名文件。",
      error: `执行操作时出错。请检查认证令牌是否仍然有效，然后稍后再试。`,
      unsaved: {
        ...en.editorPage.alerts.unsaved,
        titleLocal: "自上次下载后您有新的更改。",
        titleGit: "自上次推送后您有新的更改。",
        proceedAnyway: "仍然继续",
        message: "您的文件被临时保存在浏览器中，可能会在您回来之前被清除。",
      },
    },
    error: {
      ...en.editorPage.error,
      title: `${zh_common.terms.oops}!`,
      explanation: `${zh_common.names.dmnRunner} 无法渲染。`,
      message: [
        `${zh_common.names.dmn} 包含不受支持的结构。请参阅 `,
        wrapped("jira"),
        " 并报告问题。请不要忘记上传当前文件和使用的输入数据。",
      ],
    },
  },
  editorToolbar: {
    ...en.editorToolbar,
    closeAndReturnHome: "关闭并返回首页",
    saveAndDownload: "保存并下载",
    sendChangesToGitHub: `发送更改到 ${zh_common.names.github}`,
    copySource: "复制源代码",
    downloadSVG: `${zh_common.terms.download} ${zh_common.names.svg}`,
    setGitHubToken: `设置`,
    createGist: "创建 Gist",
    cantCreateGistTooltip: `您未登录或模型位于嵌套目录，因此无法创建 Gist。`,
    cantUpdateGistTooltip: `您未登录、不是所有者或模型位于嵌套目录，因此无法更新 Gist。`,
    createSnippet: "创建代码片段",
    cantCreateSnippetTooltip: `您未登录或模型位于嵌套目录，因此无法创建代码片段。`,
    cantUpdateSnippetTooltip: `您未登录、不是所有者或模型位于嵌套目录，因此无法更新代码片段。`,
    share: "分享",
    embed: "嵌入",
  },
  accelerators: {
    ...en.accelerators,
    commitMessage: (appName: string, acceleratorName: string) => `${appName}: 应用 ${acceleratorName} Accelerator`,
    loadingAlert: (acceleratorName: string) => `正在应用 ${acceleratorName} Accelerator...`,
    successAlert: (acceleratorName: string) => `成功应用 ${acceleratorName} Accelerator`,
    failAlert: (acceleratorName: string) => `应用 ${acceleratorName} Accelerator 失败`,
    acceleratorDescription:
      "Accelerator 是一个模板。应用它会根据其规范移动当前文件并创建新的提交。",
    acceleratorDetails: "该 Accelerator 托管于",
    dmnFilesMove: "决策 (.dmn) 将移动到:",
    dmnFilesLocation: "决策 (.dmn) 已移动到:",
    pmmlFilesMove: "评分卡 (.pmml) 将移动到:",
    pmmlFilesLocation: "评分卡 (.pmml) 已移动到:",
    bpmnFilesMove: "工作流 (.bpmn, .bpmn2) 将移动到:",
    bpmnFilesLocation: "工作流 (.bpmn, .bpmn2) 已移动到:",
    otherFilesMove: "其他文件将移动到:",
    otherFilesLocation: "其他文件已移动到:",
    applyAccelerator: "应用 Accelerator",
    appliedAt: "此 Accelerator 应用于:",
    applyDisclaimer:
      "此操作不可撤销。应用 Accelerator 后进行的任何更改都可能导致文件位于不同目录。",
  },
  devDeployments: {
    ...en.devDeployments,
    common: {
      ...en.devDeployments.common,
      deployYourModel: "部署",
      deployInstanceInfo: "部署实例信息",
      disclaimer:
        "配置所需信息后，您就可以在配置的实例上创建 Dev Deployments。所有信息都存储在本地浏览器中，不会共享。",
      learnMore: "了解更多",
      requiredField: "该字段不能为空。",
      deploying: "正在部署 ...",
      deleting: "正在删除 ...",
      saving: "正在保存 ...",
      setupFirst: `设置您的 ${zh_common.names.devDeployments} 以部署模型`,
    },
    dropdown: {
      ...en.devDeployments.dropdown,
      noDeployments: "您的部署将显示在此处",
      connectedTo: (username: string) => `已连接到 '${username}'`,
      connectedToAction: "更改...",
      deleteDeployments: "全部删除",
      item: {
        ...en.devDeployments.dropdown.item,
        upTooltip: "该部署已启动并运行。",
      },
    },
  },
};

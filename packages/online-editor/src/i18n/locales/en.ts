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
import { en as en_common } from "@kie-tools/i18n-common-dictionary";
import { en as en_unitables } from "@kie-tools/unitables/dist/i18n/locales/en";
import { wrapped } from "@kie-tools-core/i18n/dist/core";

export const en: OnlineI18n = {
  ...en_common,
  editorPage: {
    textEditorModal: {
      title: (fileName: string) => `正在编辑 ${fileName}`,
    },
    alerts: {
      setContentError: {
        title: "文件打开出错。你可以以文本方式编辑，并在修复后重新打开图表。",
        action: "以文本方式打开",
      },
      copy: "内容已复制到剪贴板",
      updateGist: "Gist 更新成功。",
      createGist: "Gist 创建成功。",
      errorPushingGist: "推送更新到当前 Gist 失败。是否尝试强制推送？",
      updateSnippet: "代码片段更新成功。",
      createSnippet: "代码片段创建成功。",
      errorPushingSnippet: "推送更新到当前代码片段失败。是否尝试强制推送？",
      forcePushWarning: "警告：此操作将使用本地更改覆盖你的 Gist！",
      invalidCurrentGist: `当前Gist ${en_common.names.url} 无效. 如需更新文件名, 需同步更新 ${en_common.names.url} 。`,
      invalidGistFilename: "文件名无效。此 Gist 中已存在同名文件。",
      error: `执行最后一次操作时发生错误。请检查你的认证Token是否仍然有效，并稍后再试。`,
      unsaved: {
        titleLocal: "自上次下载以来，有新的更改。",
        titleGit: "自上次推送以来，有新的更改",
        proceedAnyway: "仍然继续",
        message: "你的文件会临时保存在浏览器中，但可能会在你返回之前被清除。",
      },
    },
    error: {
      title: `${en_common.terms.oops}!`,
      explanation: `${en_common.names.dmnRunner} 因错误无法渲染。`,
      message: [
        `${en_common.names.dmn} 包含不支持的构造。请参考 `,
        wrapped("jira"),
        " 并报告问题。别忘了上传当前文件以及所用输入。",
      ],
    },
  },
  editorToolbar: {
    closeAndReturnHome: "关闭并返回主页",
    saveAndDownload: "保存并下载",
    sendChangesToGitHub: `发送更改到 ${en_common.names.github}`,
    copySource: "复制源代码",
    downloadSVG: `${en_common.terms.download} ${en_common.names.svg}`,
    setGitHubToken: `设置`,
    createGist: "创建 Gist",
    cantCreateGistTooltip: `无法创建 Gist，因为你未登录，或者你的模型位于嵌套目录中。`,
    cantUpdateGistTooltip: `无法更新 Gist，因为你未登录、不是所有者，或你的模型位于嵌套目录中。`,
    createSnippet: "创建代码片段",
    cantCreateSnippetTooltip: `无法创建代码片段，因为你未登录，或者你的模型位于嵌套目录中。`,
    cantUpdateSnippetTooltip: `无法更新代码片段，因为你未登录、不是所有者，或你的模型位于嵌套目录中。`,
    share: "分享",
    embed: "嵌入",
  },


  accelerators: {
    commitMessage: (appName: string, acceleratorName: string) => `${appName}: 正在应用 ${acceleratorName} 加速器`,
    loadingAlert: (acceleratorName: string) => `正在应用 ${acceleratorName} 加速器...`,
    successAlert: (acceleratorName: string) => `已成功应用 ${acceleratorName} 加速器`,
    failAlert: (acceleratorName: string) => `应用 ${acceleratorName} 加速器失败`,
    acceleratorDescription:
      "加速器是一种模板。应用它会根据加速器的规范移动你当前的文件，并为其创建一个新的提交。",
    acceleratorDetails: "该加速器托管于",
    dmnFilesMove: "决策文件 (.dmn) 将被移动到：",
    dmnFilesLocation: "决策文件 (.dmn) 已被移动到：",
    pmmlFilesMove: "评分卡 (.pmml) 将被移动到：",
    pmmlFilesLocation: "评分卡 (.pmml) 已被移动到：",
    bpmnFilesMove: "工作流 (.bpmn, .bpmn2) 将被移动到：",
    bpmnFilesLocation: "工作流 (.bpmn, .bpmn2) 已被移动到：",
    otherFilesMove: "其他文件将被移动到：",
    otherFilesLocation: "其他文件已被移动到：",
    applyAccelerator: "应用加速器",
    appliedAt: "该加速器应用于：",
    applyDisclaimer:
      "此操作是永久性的。在应用加速器后进行的任何更改，可能会导致你的文件位于不同的目录中。",
  },


  devDeployments: {
    common: {
      deployYourModel: "部署",
      deployInstanceInfo: "部署实例信息",
      disclaimer:
        "在设置好所需信息后，可在已配置的实例上创建开发部署。所有信息仅保存在浏览器本地。",
      learnMore: "了解更多",
      requiredField: "此字段不能为空。",
      deploying: "正在部署...",
      deleting: "正在删除...",
      saving: "正在保存...",
      setupFirst: `请先设置 ${en_common.names.devDeployments} 以便能够部署模型`,
    },
    dropdown: {
      noDeployments: "部署会显示在这里",
      connectedTo: (username: string) => `已连接到 '${username}'`,
      connectedToAction: "更改...",
      deleteDeployments: "删除全部",
      item: {
        upTooltip: "此部署正在运行。",
        downTooltip: "此部署未运行。",
        inProgressTooltip: "此部署正在进行中，很快就会可用。",
        errorTooltip:
          "部署过程中发生了意外错误。请检查实例中的日志以获取更多信息。",
        createdAt: (date: string) => `创建于 ${date}`,
      },
    },
    configModal: {
      hostInfo: `与实例关联的主机名。`,
      namespaceInfo: `要创建 Dev Deployments 的命名空间（项目）。`,
      tokenInfo: `与实例关联的Token。`,
      insecurelyDisableTlsCertificateValidation: "不安全地禁用 TLS 证书验证",
      insecurelyDisableTlsCertificateValidationInfo:
        "勾选此选项将不安全地禁用此账户的 TLS 证书验证。这可以避免当集群位于使用自签名证书的 HTTPS 端点时，浏览器带来的限制。但请注意，自签名证书的安全性较弱，建议联系集群管理员使用可信证书。更多信息请参考 <a href='https://cwe.mitre.org/data/definitions/295.html' target='_blank'>https://cwe.mitre.org/data/definitions/295.html</a>。",
      validationError: "必须填写所有必填字段才能继续。",
      connectionError: "连接被拒绝。请检查所提供的信息。",
      missingPermissions:
        "缺少 Dev Deployments 所需权限（deployments、services、ingresses）。请检查用户权限后重试。",
      namespaceNotFound: (namespace: string) => `集群中未找到命名空间 ${namespace}。`,
      configExpiredWarning: "Token或账户已过期。请更新配置信息。",
      useOpenShiftWizard: "通过向导配置新的 Red Hat OpenShift 沙盒（暂不可用）",
      useKubernetesWizard: "通过向导配置新的本地 Kubernetes 集群",
    },

    deployConfirmModal: {
      title: "部署",
      body: "此操作可能需要几分钟才能完成。如果更新模型，需要重新创建部署，因为 Dev Deployments 是不可变的。",
    },
    deleteConfirmModal: {
      title: "删除 Dev Deployment(s)",
      body: "确定要删除 Dev Deployment(s) 吗？",
    },
    alerts: {
      deployStartedError:
        "创建 Dev Deployment 时发生错误。请检查配置信息并重试。",
      deployStartedSuccess: "Dev Deployment 已成功启动，很快即可使用。",
      deleteError: "删除 Dev Deployment(s) 失败。请通过 OpenShift 控制台或 CLI 重试。",
      deleteSuccess: "Dev Deployment(s) 已成功删除。",
    },

    introduction: {
      explanation: `在云端创建 Dev Deployments 并与他人共享。`,
      disclaimer: `${en_common.names.devDeployments
        } 仅适用于 ${"development".bold()} 在关键业务负载中使用需测试。`,
      getStarted: "要开始，请先配置实例信息。",
    },
    openShiftConfigWizard: {
      header: {
        provider: "提供商",
      },
      steps: {
        first: {
          name: "创建实例",
          introduction: `要创建 ${en_common.names.shortDevSandbox} 实例:`,
          goToGetStartedPage: "前往Get Started页面",
          followSteps: `按照步骤启动实例。系统会要求使用 ${en_common.names.redHat} 账号。`,
          informNamespace: `实例启动并运行后，请填写要创建 Dev Deployments 的命名空间（项目）。`,
          inputReason:
            "这些信息是为了在正确的命名空间（项目）中创建 Dev Deployments。",
          namespacePlaceholder: `要创建 Dev Deployments 的命名空间（项目）。`,
        },
        second: {
          name: "设置凭据",
          introduction: `在 ${en_common.names.shortDevSandbox} 实例中：`,
          accessLoginCommand: `点击右上角的用户名，然后选择 ${"'Copy login command'".bold()}.`,
          accessDisplayToken: `如果出现提示，请使用 ${"'DevSandbox'".bold()}, 然后进入 ${"'Display Token'".bold()}  链接。`,
          copyInformation: `在 ${"'Log in with this token'".bold()}部分, 复制 ${"'--server'".bold()} 和 ${"'--token'".bold()} 的值，并粘贴到下方。`,
          inputReason: "这些信息用于建立与实例的连接。",
          hostPlaceholder: "在此粘贴 --server 的值",
          tokenPlaceholder: "在此粘贴 --token 的值",
        },
        final: {
          name: "连接",
          connectionSuccess: "连接已成功建立。",
          connectionError: "连接被拒绝。",
          introduction: "现在可以在此 OpenShift 实例上创建 Dev Deployments。",
          configNote: "所提供的Token仅保存在本地浏览器中，不会与任何人共享。",
          connectionErrorLong: `无法与 ${en_common.names.shortDevSandbox} 实例建立连接。`,
          checkInfo: "请检查所填信息并重试。",
          possibleErrorReasons: {
            introduction: "可能的原因包括：",
            emptyField: "一个或多个必填信息未填写。",
            instanceExpired:
              "实例在 30 天后会过期。届时需要重新创建，并会获得新的主机地址。",
            tokenExpired: "Token有效期为1天。",
          },
        },
      },
    },
    kubernetesConfigWizard: {
      header: {
        provider: "环境",
      },
      fields: {
        namespace: "命名空间",
        namespaceInfo: "集群中将创建 Dev Deployments 的命名空间。",
        kubernetesApiServerUrl: "Kubernetes API 服务器 URL",
        kubernetesApiServerUrlInfo: "与集群中 Kubernetes API 服务器关联的主机名。",
        tokenInfo: "与服务账户关联的令牌。",
      },
      steps: {
        first: {
          name: "创建 Kubernetes 集群",
          introduction:
            "要创建本地 Kubernetes 集群，首先选择所需的发行版并按照步骤操作：",
          installFlavor: (flavor: string) => `下载并安装 ${flavor}。`,
          installKubectl: "如果尚未安装 Kubectl，请先安装。",
          runCommandsTerminal: "在此步骤中，请在终端中运行以下命令。",
          createCluster: "创建集群：",
          installIngress: "安装 Ingress 控制器并等待其就绪：",
          installKieSandboxYaml:
            "为 Kubernetes API 服务器安装代理并创建所需的服务账户：",
        },
        second: {
          name: "设置连接信息",
          introduction:
            "当集群已启动并运行时，主机地址会自动填充在下方输入框，并且应已有一个命名空间被创建。",
          disclaimer:
            "仅在自定义 Kubernetes 安装时修改以下值，但需注意结果可能与预期不符。",
          hostInputReason: "这些信息用于建立与 Kubernetes 集群的连接。",
          namespaceInputReason:
            "这些信息用于在正确的命名空间中创建 Dev Deployments。",
          namespacePlaceholder: "要创建 Dev Deployments 的命名空间。",
          hostPlaceholder: "Kubernetes API 服务器 URL",
        },
        third: {
          name: "认证",
          introduction:
            "Kubernetes API 要求所有请求都使用认证令牌。在此步骤中，将获取之前创建的服务账户的认证令牌。",
          getToken: "在终端中运行以下命令以获取认证令牌，然后复制结果：",
          tokenPlaceholder: "在此粘贴令牌值",
          tokenInputReason: "令牌用于对发送到 Kubernetes API 服务器的请求进行认证。",
        },
        final: {
          name: "连接",
          connectionSuccess: "连接已成功建立。",
          connectionError: "连接被拒绝。",
          introduction: "现在可以在此 Kubernetes 实例上创建 Dev Deployments。",
          configNote: "所提供的令牌仅保存在本地浏览器中，不会与任何人共享。",
          connectionErrorLong: `无法与 Kubernetes 集群建立连接。`,
          checkInfo: "请检查所填信息并重试。",
          possibleErrorReasons: {
            introduction: "可能的原因包括：",
            emptyField: "一个或多个必填信息未填写。",
            clusterNotCreatedCorrectly: "Kubernetes 集群可能未正确创建。",
            tokenExpired: "令牌可能已过期，请尝试重新生成。",
          },
        },
      },
    },
  },
  embedModal: {
    title: "嵌入",
    description:
      "将编辑器和内容嵌入到页面中。请选择以下选项并复制嵌入代码到剪贴板：",
    copy: "复制",
    source: {
      current: {
        label: "当前内容",
        description: "嵌入的编辑器将包含当前内容，无法通过外部修改。",
      },
      gist: {
        alert: `有新的更改尚未推送。以 ${en_common.names.github} Gist 形式嵌入时不会显示最新更改。`,
        tooltip: `仅在从 ${en_common.names.github} Gist 编辑文件时可用。`,
        label: `${en_common.names.github} Gist`,
        description:
          "嵌入的编辑器将从打开的 Gist 获取内容对，该 Gist 的更改会在编辑器中体现。",
      },
    },
    embedCode: "嵌入代码",
    copiedToClipboard: "已复制到剪贴板",
  },
  connectToGitModal: {
    github: {
      header: {
        title: `${en_common.names.github} ${en_common.names.oauth} ${en_common.terms.token}`,
        subtitle: `设置 ${en_common.names.github} 令牌，以便与 GitHub 交互。`,
      },
      footer: {
        createNewToken: "生成新令牌",
        placeHolder: "在此粘贴令牌",
      },
      body: {
        learnMore: `了解有关 ${en_common.names.github} 令牌的更多信息`,
        note: `应提供具有 ${"'gist'".bold()} 权限的令牌。`,
      },
      validation: {
        scopes: {
          helper: "令牌必须包含 'repo' 和 'gist' 权限范围。",
        },
      },
      form: {
        token: {
          label: "个人访问令牌",
          placeHolder: "在此粘贴 GitHub 令牌",
        },
      },
    },
    bitbucket: {
      header: {
        title: `${en_common.names.bitbucket} ${en_common.names.oauth} ${en_common.terms.token}`,
        subtitle: `设置 ${en_common.names.bitbucket} 应用密码，以便与 Bitbucket 交互。`,
      },
      footer: {
        createNewToken: "生成新的应用密码",
        placeHolder: "在此粘贴应用密码",
      },
      body: {
        learnMore: `了解有关 ${en_common.names.bitbucket} 应用密码的更多信息`,
        note: `应提供具有 ${"'snippet'".bold()} 权限的令牌。`,
      },
      validation: {
        scopes: {
          helper: "令牌必须包含 'account'、'repository' 和 'snippet' 权限范围。",
        },
      },
      form: {
        username: {
          label: "Bitbucket 用户名",
          placeHolder: "在此粘贴 Bitbucket 用户名",
        },
        token: {
          label: "Bitbucket 应用密码",
          placeHolder: "在此粘贴 Bitbucket 应用密码",
        },
      },
    },

    auth: {
      disclaimer: `所提供的令牌仅保存在本地浏览器中，不会与任何人共享。`,
      error: {
        alreadyLoggedIn: "已使用该令牌登录。",
        oauthScopes: (requiredScopes: string) =>
          `请确保令牌包含必要的 OAuth2 权限范围：${requiredScopes}`,
      },
    },

    navigation: {
      continue: "继续",
      seeConnectedAccounts: "查看已连接的账户",
    },
    status: {
      loading: "加载中...",
    },
    insecurelyDisableTlsCertificateValidation: "不安全地禁用 TLS 证书验证",
    insecurelyDisableTlsCertificateValidationInfo:
      "勾选此选项将不安全地禁用此账户的 TLS 证书验证。仅在信任 Git 提供方且其位于使用自签名证书的 HTTPS 端点时勾选此选项。请注意，自签名证书的安全性较弱，建议联系 Git 提供方以使用可信证书。更多信息请参考 <a href='https://cwe.mitre.org/data/definitions/295.html' target='_blank'>https://cwe.mitre.org/data/definitions/295.html</a>。",
  },
  commitModal: {
    title: "输入自定义提交信息",
    description: "编写对工作区更改的简要说明，不超过 36 个字符。",
    commit: "提交",
    emptyMessageValidation: "提交信息不能为空",
    placeholder: "提交信息",
  },

  homePage: {
    uploadFile: {
      header: "编辑现有文件",
      body: `在此上传 ${en_common.names.bpmn}、${en_common.names.dmn} 或 ${en_common.names.pmml} 文件，以开始新的编辑！`,
      helperText: `上传 .${en_common.names.bpmn}、.${en_common.names.bpmn}2、.${en_common.names.dmn} 或 .${en_common.names.pmml} 文件`,
      helperInvalidText: "不支持的文件扩展名",
      placeholder: "拖拽文件到此处，或点击浏览选择。",
    },
    openUrl: {
      validating: `正在验证 ${en_common.names.url}`,
      invalidGistExtension: "提供的 gist 文件类型不受支持。",
      invalidExtension: `提供的 ${en_common.names.url} 文件类型不受支持。`,
      invalidGist: `请输入有效的 gist ${en_common.names.url}。如果使用特定 gist ${en_common.names.url}，请注意其名称不能包含空格和大写字母。`,
      invalidUrl: `此 ${en_common.names.url} 无效（别忘了加上 "https://"！）。`,
      notFoundUrl: `此 ${en_common.names.url} 不存在。`,
      corsNotAvailable: `此 ${en_common.names.url} 无法打开，因为它不允许其他网站访问。`,
      openFromSource: "从来源打开",
      description: `粘贴一个源代码链接的 ${en_common.names.url}（${en_common.names.github}、${en_common.names.dropbox} 等）`,
    },
    dropdown: {
      onlineForum: "在线论坛",
    },
    bpmnCard: {
      title: `工作流 (.${en_common.names.bpmn})`,
      explanation: `${en_common.names.bpmn} 文件用于生成工作流。`,
      createNew: "创建新工作流",
    },
    dmnCard: {
      title: `决策模型 (.${en_common.names.dmn})`,
      explanation: `${en_common.names.dmn} 文件用于生成决策模型。`,
      createNew: "创建新决策模型",
    },
    pmmlCard: {
      title: `评分卡模型 (.${en_common.names.pmml})`,
      explanation: `${en_common.names.pmml} 文件用于生成评分卡。`,
      createNew: "创建新评分卡",
    },
    trySample: "尝试示例",
    chooseLocalFile: "选择本地文件",
  },
  alerts: {
    gistError: `无法打开此 Gist。如果已更新 Gist 文件名，URL 可能需要几秒钟才能生效。`,
    goToHomePage: "返回主页",
    errorDetails: "错误详情：",
    responseError: {
      title: "获取文件时发生错误",
    },
    fetchError: {
      title: "尝试获取文件时发生意外错误",
      possibleCauses: "可能的原因：",
      missingGitHubToken: `如果尝试打开私有文件，请先设置 GitHub 令牌。可在编辑器页面的“共享”下拉菜单中，打开“设置 GitHub 令牌”对话框完成此操作。`,
      cors: "文件的 URL 响应必须允许 CORS，并包含以下响应头：",
    },
  },
  dmnRunner: {
    error: {
      title: `${en_common.terms.oops}!`,
      explanation: `${en_common.names.dmnRunner} 因错误无法渲染。`,
      message: [
        `此 ${en_common.names.dmn} 包含不受支持的结构。请参考 `,
        wrapped("jira"),
        " 并报告问题。别忘了上传当前文件和所用输入。",
      ],
    },
    table: { ...en_unitables },
    modal: {
      initial: {
        runDmnModels: "运行模型，在编辑时查看实时表单和结果。",
        explanation:
          "输入节点会成为自动生成表单中的交互字段，结果会以易读的卡片形式展示。",
        notificationPanelExplanation: [
          `编辑器右下角的“问题”面板 `,
          wrapped("icon"),
          ` 会实时显示评估消息，用于辅助决策建模。`,
        ],
      },
      wizard: {
        title: `${en_common.names.extendedServices} ${en_common.terms.setup}`,
        description: `选择 ${en_common.terms.os.full}，并按照说明安装并启动 ${en_common.names.extendedServices}。`,
        outdatedAlert: {
          title: `${en_common.names.extendedServices} 已过期!`,
          message: `检测到正在使用不兼容版本的 ${en_common.names.extendedServices}。请按照以下说明进行更新。`,
        },
        stoppedAlert: {
          title: `${en_common.names.extendedServices} 已停止!`,
          message: `检测到 ${en_common.names.extendedServices} 已意外停止，请按照以下说明重新启动。`,
        },
        macos: {
          install: {
            download: ` ${en_common.names.extendedServices}.`,
            openFile: ["打开 ", wrapped("file"), " 文件。"],
            dragFileToApplicationsFolder: ["将 ", wrapped("file"), " 拖到 ", wrapped("folder"), " 文件夹。"],
          },
          start: {
            stopped: {
              startInstruction: `如果在系统栏看到 ${en_common.names.extendedServices} 图标，只需点击并选择 "${en_common.terms.start}"。`,
              launchExtendedServices: [
                `否则，启动 ${en_common.names.extendedServices} 应用，方法是打开 `,
                wrapped("file"),
                "。",
              ],
            },
            firstTime: {
              title: `如果刚安装了 ${en_common.names.extendedServices}:`,
              openApplicationsFolder: ["打开 ", wrapped("folder"), " 文件夹。"],
              again: "再次",
              openAndCancel: [
                "右键点击 ",
                wrapped("file"),
                `，选择 "${en_common.terms.open}"，然后选择 "${en_common.terms.cancel}"。`,
              ],
              openInstruction: [
                "右键点击 ",
                wrapped("file"),
                " ",
                wrapped("again"),
                `，然后选择 "${en_common.terms.open}"。`,
              ],
            },
            alreadyRanBefore: `如果之前已安装并运行过 ${en_common.names.extendedServices}:`,
            launchExtendedServices: ["启动 ", wrapped("file")],
            advanced: {
              title: "高级设置",
              runFollowingCommand: `在终端标签页运行以下命令，以在不同端口启动 ${en_common.names.extendedServices}:`,
            },
          },
        },
        windows: {
          install: {
            keepDownload: ` ${en_common.names.extendedServices}。请注意，可能需要右键点击下载并选择 "另存为"`,
            moveTheFile: ["将 ", wrapped("file"), " 文件移动到首选文件夹。"],
          },
          start: {
            stopped: {
              startInstruction: `如果在系统栏看到 ${en_common.names.extendedServices} 图标，只需点击并选择 "${en_common.terms.start}"。`,
              launchExtendedServices: [
                `否则，启动 ${en_common.names.extendedServices}，方法是打开 `,
                wrapped("file"),
                " 文件。",
              ],
            },
            firstTime: {
              title: `如果刚安装了 ${en_common.names.extendedServices}:`,
              openFolder: ["打开放置 ", wrapped("file"), " 文件的文件夹。"],
              runAnyway: `双击文件并选择 "更多信息"，然后点击 "仍要运行" 按钮。`,
            },
            alreadyRanBefore: `如果之前已安装并运行过 ${en_common.names.extendedServices}:`,
            launchExtendedServices: ["打开 ", wrapped("file"), " 文件。"],
            advanced: {
              title: "高级设置",
              runFollowingCommand: `在命令提示符中运行以下命令，以在不同端口启动 ${en_common.names.extendedServices}:`,
            },
          },
        },
        linux: {
          install: {
            download: ` ${en_common.names.extendedServices}.`,
            installAppIndicator: "为系统安装 AppIndicator 库：",
            ubuntuDependency: [`${en_common.names.ubuntu}: `, wrapped("package")],
            fedoraDependency: [`${en_common.names.fedora}: `, wrapped("package")],
            extractContent: ["将 ", wrapped("file"), " 的内容解压到指定位置。"],
            binaryExplanation: [
              `${en_common.names.extendedServices} 可执行文件 `,
              wrapped("file"),
              " 是一个单一的二进制文件，这意味着可以将其加入 PATH，甚至配置为开机自动执行。",
            ],
          },
          start: {
            openTerminal: "打开终端窗口。",
            goToFolder: ["进入放置 ", wrapped("file"), " 可执行文件的文件夹。"],
            runCommand: "运行 ",
            advanced: {
              title: "高级设置",
              runFollowingCommand: [
                "打开终端窗口，并在放置 ",
                wrapped("file"),
                " 可执行文件的目录下运行以下命令：",
              ],
            },
          },
        },
        footerWaitingToConnect: `正在等待连接到 ${en_common.names.extendedServices}`,
        advancedSettings: {
          title: [
            `默认的 ${en_common.names.extendedServices} 端口是 `,
            wrapped("port"),
            `。如果该端口已被其他应用占用，可以更改用于连接 ${en_common.names.extendedServices} 的端口。`,
          ],
          label: "端口",
          helperTextInvalid: "无效的端口。有效范围: 0 <= 端口 <= 65353",
        },
      },
    },
    dropdown: {
      label: `${en_common.names.extendedServices}`,
      setup: `${en_common.terms.setup} ${en_common.names.extendedServices}`,
      open: `${en_common.terms.open} ${en_common.names.extendedServices} 面板`,
      close: `${en_common.terms.close} ${en_common.names.extendedServices} 面板`,
    },
    button: {
      available: `目前仅在 ${en_common.names.chrome} 中可用`,
    },
    notificationsPanel: {
      name: "问题面板",
      tooltip: {
        retractAll: "全部收起",
        expandAll: "全部展开",
      },
    },
    extendedServices: {
      dropdown: {
        shortConnected: (port: string) => `已连接到端口 ${port}`,
        tooltip: {
          connected: `${en_common.names.extendedServices} 已连接。`,
          install: `请设置 ${en_common.names.extendedServices} 以使用此功能。点击安装。`,
          outdated: `${en_common.names.extendedServices} 已过期。点击更新。`,
          disconnected: `${en_common.names.extendedServices} 已断开连接。`,
        },
      },
      modal: {
        initial: {
          subHeader: `拓展 ${en_common.names.dmn} 编辑器`,
        },
      },
    },
    createGitRepositoryModal: {
      form: {
        buttonCreate: "创建",
        nameField: {
          label: "名称",
          hint: "名称无效。仅允许字母、数字、短横线 (-)、点 (.) 和下划线 (_)。",
        },
        visibility: {
          public: {
            label: "公开",
            description: "任何人都可以在互联网上看到此仓库。由你决定谁可以提交。",
          },
          private: {
            label: "私有",
            description: "由你决定谁可以查看和提交此仓库。",
          },
        },
      },
    },
    bitbucket: {
      repository: `${en_common.names.bitbucket} 仓库`,
      createRepository: `创建 ${en_common.names.bitbucket} 仓库`,
      description: (workspace: string) =>
        `'${workspace}' 的内容将全部放入新的 ${en_common.names.bitbucket} 仓库中。`,
      error: {
        formAlert: (error: string) => `创建 ${en_common.names.bitbucket} 仓库时出错。${error}`,
      },
      form: {
        select: {
          label: "选择要在其下创建新仓库的工作区。",
          description: "可以选择个人或共享工作区。",
        },
      },
    },
    github: {
      repository: `${en_common.names.github} 仓库`,
      createRepository: `创建 ${en_common.names.github} 仓库`,
      description: (workspace: string) =>
        `'${workspace}' 的内容将全部放入新的 ${en_common.names.github} 仓库中。`,
      error: {
        formAlert: (error: string) => `创建 ${en_common.names.github} 仓库时出错。${error}`,
      },
      form: {
        select: {
          label: "新仓库将创建在以下范围下",
          description: "可以选择用户账户或 GitHub 组织。",
        },
      },
    },
  },
createGistOrSnippetModal: {
  form: {
    buttonCreate: "创建",
    visibility: {
      public: {
        label: "公开",
        description: "任何人都可以在互联网上看到此仓库。由你决定谁可以提交。",
      },
      private: {
        label: "私有",
        description: "由你决定谁可以查看和提交此仓库。",
      },
    },
  },
  bitbucket: {
    gistOrSnippet: `${en_common.names.bitbucket} 代码片段`,
    create: `创建 ${en_common.names.bitbucket} 代码片段`,
    description: (workspace: string) =>
      `'${workspace}' 的内容将全部放入新的 ${en_common.names.bitbucket} 代码片段中。`,
    error: {
      formAlert: (error: string) => `创建 ${en_common.names.bitbucket} 代码片段时出错。${error}`,
    },
    form: {
      select: {
        label: "选择要在其下创建新代码片段的工作区。",
        description: "可以选择个人或共享工作区。",
      },
    },
  },
  github: {
    gistOrSnippet: `${en_common.names.github} Gist`,
    create: `创建 ${en_common.names.github} Gist`,
    description: (workspace: string) =>
      `'${workspace}' 的内容将全部放入新的 ${en_common.names.github} Gist 中。`,
    error: {
      formAlert: (error: string) => `创建 ${en_common.names.github} Gist 时出错。${error}`,
    },
    form: {
      select: {
        label: "Gist 将创建在以下用户下。",
        description: "目前 GitHub 不允许在组织中创建 Gist。",
      },
    },
  },
},
loadOrganizationsSelect: {
  bitbucket: {
    user: "Bitbucket 用户",
    organizations: "Bitbucket 工作区",
  },
  github: {
    user: "GitHub 用户",
    organizations: "GitHub 组织",
  },
},
gitStatusIndicatorActions: {
  revert: {
    title: "撤销",
    warning: "此操作是永久性的",
    description: "确定要撤销本地更改吗：",
    confirmButtonText: "是，永久撤销",
  },
  revertAll: {
    title: "撤销所有更改",
    warning: "此操作是永久性的",
    description: "确定吗？以下文件将被还原到上一次提交：",
    confirmButtonText: "是，永久撤销",
  },
},
};
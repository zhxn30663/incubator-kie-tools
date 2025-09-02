# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Build Commands
- `pnpm build:dev` - Development build (fast, skips linting/tests)
- `pnpm build:prod` - Production build (includes linting and E2E tests)
- `pnpm copy:css` - Copy CSS/SASS files to dist directory

### Development Server
- `pnpm start` - Start Storybook development server on port 9901
- Access at `https://localhost:9901` for component development

### Testing
- `pnpm test-e2e` - Run Playwright E2E tests
- `pnpm test-e2e:open` - Open Playwright test report
- E2E tests use Storybook as test server

### Linting
- `pnpm lint` - Run ESLint (conditionally based on build environment)

## Architecture Overview

### Core Technologies
- **React 17** with TypeScript for UI components
- **ReactFlow** for diagram rendering and interaction
- **Zustand + Immer** for state management
- **PatternFly** for consistent UI components
- **Storybook** for component development and testing

### Key Architectural Patterns
- **Command Pattern**: Undo/redo operations via `src/commands/`
- **Mutation Pattern**: Centralized state mutations in `src/mutations/`
- **Computed State**: Cached derived state in `src/store/computed/`
- **Normalization**: DMN model normalization in `src/normalization/`

### Main Source Structure
- **`src/DmnEditor.tsx`**: Main editor component entry point
- **`src/store/Store.ts`**: Zustand store with computed state caching
- **`src/diagram/`**: ReactFlow-based diagram components and nodes
- **`src/boxedExpressions/`**: DMN boxed expression editor
- **`src/propertiesPanel/`**: Properties panels for editing
- **`src/dataTypes/`**: Data type management
- **`src/includedModels/`**: External model inclusion
- **`src/autolayout/`**: ELK.js-based automatic layout
- **`src/feel/`**: FEEL expression handling

### DMN Node Types
The editor supports all DMN 1.5 node types:
- Decision
- InputData
- BusinessKnowledgeModel  
- KnowledgeSource
- DecisionService
- TextAnnotation
- Group

### State Management
- **Store**: `src/store/Store.ts` - Zustand with Immer for immutable updates
- **Context**: `src/DmnEditorContext.tsx` - React context for editor state
- **Computed State**: Cached indexes for nodes, edges, data types, validation
- **Commands**: Undo/redo system with command history

### External Dependencies
The DMN Editor integrates with several KIE Tools packages:
- `@kie-tools/dmn-marshaller` - DMN XML serialization
- `@kie-tools/boxed-expression-component` - Expression editing
- `@kie-tools/dmn-feel-antlr4-parser` - FEEL parsing
- `@kie-tools/pmml-editor-marshaller` - PMML model support

## Development Workflow

### Component Development
Use Storybook for component development. Key stories:
- **Empty Editor**: Basic empty DMN editor
- **Loan Pre-qualification**: Example with pre-loaded DMN model
- **Dev Web App**: Full editor with all panels

### Adding New Features
1. Add mutations to `src/mutations/` for state changes
2. Create/update computed state in `src/store/computed/`  
3. Add React components in appropriate directories
4. Update Storybook stories for testing
5. Add E2E tests in `tests-e2e/`

### Testing Strategy
The project focuses on E2E testing rather than unit tests:
- **Playwright** tests cover user interactions
- Tests run against Storybook instances
- Coverage includes diagram operations, properties editing, node management

### CSS and Styling
- Main styles in `src/DmnEditor.css`
- Component-specific CSS files alongside components
- PatternFly base styles with custom overrides
- ReactFlow styling customizations

### Build Configuration
- **TypeScript**: Extends `@kie-tools/tsconfig`
- **Webpack**: Uses `@kie-tools-core/webpack-base`
- **Environment**: Configuration via `@kie-tools/root-env`
- **Target**: ES6 modules for modern browsers

## Key Development Notes

### DMN Specification Compliance
The editor implements DMN 1.5 specification with KIE-specific extensions. All model operations maintain specification compliance through the normalization layer.

### Performance Considerations
- Computed state caching prevents expensive recalculations
- ReactFlow optimizations for large diagrams
- Immer ensures efficient immutable updates

### External Model Integration
The editor supports including external DMN and PMML models with proper namespace management and dependency resolution.

## Localization (中文汉化)

### 汉化状态
项目已完成部分界面中文汉化，采用硬编码方式直接替换英文文本为中文文本。汉化内容包括：

#### 已汉化的组件
- **控制台调试信息**: Console debug/error messages 已翻译为中文
- **属性面板标签**: Properties panel form labels (名称、数据类型、描述等)
- **数据类型选择器**: TypeRef selector groups (内置类型、自定义类型、外部类型)
- **用户界面按钮**: UI buttons and actions (返回图表、自动布局等)
- **覆盖层面板**: Overlays panel options (对齐、水平、垂直等)
- **表格列标题**: Table column headers (名称、类型、约束等)

#### 汉化文件清单
主要已汉化的文件包括：
- `src/DmnEditor.tsx` - 主编辑器调试信息
- `src/clipboard/Clipboard.ts` - 剪贴板操作提示
- `src/diagram/Diagram.tsx` - 图表操作调试信息
- `src/propertiesPanel/BkmProperties.tsx` - BKM属性面板
- `src/propertiesPanel/DecisionProperties.tsx` - 决策属性面板
- `src/dataTypes/TypeRefSelector.tsx` - 数据类型选择器
- `src/boxedExpressions/BoxedExpressionScreen.tsx` - 表达式编辑器
- `src/overlaysPanel/OverlaysPanel.tsx` - 覆盖层面板
- `src/autolayout/AutolayoutButton.tsx` - 自动布局按钮
- `src/dataTypes/ItemComponentsTable.tsx` - 数据类型表格

#### 汉化原则
1. **硬编码替换**: 直接在源码中将英文文本替换为中文文本
2. **保持功能性**: 仅替换用户可见文本，保留技术性标识符
3. **一致性**: 使用统一的术语翻译（如"数据类型"、"属性面板"等）
4. **调试信息**: Console输出也进行汉化便于中文开发者理解

### 后续汉化工作
如需完整汉化，还需处理以下文件：
- 其他属性面板组件 (InputDataProperties, GroupProperties等)
- 错误消息和警告文本
- 占位符文本 (placeholder text)
- 工具提示文本 (tooltips)
- 按钮和菜单项文本

### 注意事项
- 由于项目在本机无法构建，汉化采用硬编码方式
- 调试时可通过浏览器开发者工具查看中文调试信息
- 建议在实际部署前验证所有中文文本显示效果
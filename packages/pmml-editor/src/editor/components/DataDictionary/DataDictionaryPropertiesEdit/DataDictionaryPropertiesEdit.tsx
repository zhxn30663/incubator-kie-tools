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
import { useEffect, useMemo, useState } from "react";
import { Button } from "@patternfly/react-core/dist/js/components/Button";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { Stack, StackItem } from "@patternfly/react-core/dist/js/layouts/Stack";
import { Split, SplitItem } from "@patternfly/react-core/dist/js/layouts/Split";
import { Form, FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { Alert } from "@patternfly/react-core/dist/js/components/Alert";
import { Tooltip } from "@patternfly/react-core/dist/js/components/Tooltip";
import { Radio } from "@patternfly/react-core/dist/js/components/Radio";
import { Title, TitleSizes } from "@patternfly/react-core/dist/js/components/Title";
import { HelpIcon } from "@patternfly/react-icons/dist/js/icons/help-icon";
import { ArrowAltCircleLeftIcon } from "@patternfly/react-icons/dist/js/icons/arrow-alt-circle-left-icon";
import { ConstraintType, DDDataField } from "../DataDictionaryContainer/DataDictionaryContainer";
import ConstraintsEdit from "../ConstraintsEdit/ConstraintsEdit";
import "./DataDictionaryPropertiesEdit.scss";

interface DataDictionaryPropertiesEditProps {
  dataType: DDDataField;
  dataFieldIndex: number | undefined;
  onClose: () => void;
  onSave: (payload: Partial<DDDataField>) => void;
}

const DataDictionaryPropertiesEdit = (props: DataDictionaryPropertiesEditProps) => {
  const { dataType, dataFieldIndex, onClose, onSave } = props;
  const [displayName, setDisplayName] = useState(dataType.displayName ?? "");
  const [isCyclic, setIsCyclic] = useState(dataType.isCyclic);
  const [missingValue, setMissingValue] = useState(dataType.missingValue ?? "");
  const [invalidValue, setInvalidValue] = useState(dataType.invalidValue ?? "");

  useEffect(() => {
    setDisplayName(dataType.displayName ?? "");
    setIsCyclic(dataType.isCyclic);
    setMissingValue(dataType.missingValue ?? "");
    setInvalidValue(dataType.invalidValue ?? "");
  }, [dataType]);

  const saveCyclicProperty = (value: DDDataField["isCyclic"]) => {
    setIsCyclic(value);
    onSave({
      isCyclic: value,
    });
  };

  const isOptypeDisabled = useMemo(() => dataType.optype === "categorical", [dataType.optype]);

  const constraintAlert = useMemo(() => {
    if (dataType.optype === "continuous" && dataType.isCyclic && dataType.constraints === undefined) {
      return "循环连续数据类型需要区间或值约束";
    }
    if (
      dataType.isCyclic &&
      dataType.optype === "continuous" &&
      dataType.constraints?.type === ConstraintType.RANGE &&
      dataType.constraints.value?.length > 1
    ) {
      return "循环连续数据类型只能有一个区间约束";
    }
  }, [dataType]);

  return (
    <Stack hasGutter={true} className="data-dictionary__properties-edit">
      <StackItem>
        <Title headingLevel="h4" size={TitleSizes.xl}>
          <Button variant="link" isInline={true} onClick={onClose}>
            {dataType.name}
          </Button>
          &nbsp;/&nbsp;属性
        </Title>
      </StackItem>
      <StackItem
        className="data-dictionary__properties-edit__form-container"
        data-ouia-component-id="df-props"
        data-ouia-component-type="editor-body"
      >
        <Form className="data-dictionary__properties-edit__form">
          <Split hasGutter={true}>
            <SplitItem className="data-dictionary__properties-edit__form__left-column">
              <Stack hasGutter={true}>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="显示名称"
                    fieldId="display-name"
                    helperText="用于替代数据类型名称的显示名称"
                  >
                    <TextInput
                      type="text"
                      id="display-name"
                      name="display-name"
                      aria-describedby="显示名称"
                      value={displayName}
                      onChange={(value) => setDisplayName(value)}
                      autoComplete="off"
                      onBlur={() =>
                        onSave({
                          displayName: displayName === "" ? undefined : displayName,
                        })
                      }
                      ouiaId="display-name"
                    />
                  </FormGroup>
                </StackItem>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="循环类型"
                    fieldId="is-cyclic"
                    isInline={true}
                    labelIcon={
                      dataType.optype === "categorical" ? (
                        <Tooltip content={"分类字段不能是循环的"}>
                          <button
                            aria-label="循环类型的更多信息"
                            onClick={(e) => e.preventDefault()}
                            className="pf-c-form__group-label-help"
                          >
                            <HelpIcon style={{ color: "var(--pf-global--info-color--100)" }} />
                          </button>
                        </Tooltip>
                      ) : (
                        <></>
                      )
                    }
                  >
                    <Radio
                      isChecked={isCyclic === true}
                      name="isCyclic"
                      onChange={() => {
                        saveCyclicProperty(true);
                      }}
                      label="是"
                      id="isCyclic"
                      value="isCyclic"
                      isDisabled={isOptypeDisabled}
                    />
                    <Radio
                      isChecked={isCyclic === false}
                      name="isNotCyclic"
                      onChange={() => {
                        saveCyclicProperty(false);
                      }}
                      label="否"
                      id="isNotCyclic"
                      value="isNotCyclic"
                      isDisabled={isOptypeDisabled}
                    />
                    <Radio
                      isChecked={isCyclic === undefined}
                      name="cyclicNotSet"
                      onChange={() => {
                        saveCyclicProperty(undefined);
                      }}
                      label="未设置"
                      id="cyclicNotSet"
                      value="cyclicNotSet"
                      isDisabled={isOptypeDisabled}
                    />
                  </FormGroup>
                </StackItem>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="缺失值"
                    fieldId="missing-value"
                    helperText="输入缺失时的值"
                  >
                    <TextInput
                      type="text"
                      id="missing-value"
                      name="missing-value"
                      aria-describedby="缺失值"
                      value={missingValue}
                      onChange={(value) => setMissingValue(value)}
                      autoComplete="off"
                      onBlur={() =>
                        onSave({
                          missingValue: missingValue === "" ? undefined : missingValue,
                        })
                      }
                      ouiaId="missing-value"
                    />
                  </FormGroup>
                </StackItem>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="无效值"
                    fieldId="missing-value"
                    helperText="输入无效时的值"
                  >
                    <TextInput
                      type="text"
                      id="invalid-value"
                      name="invalid-value"
                      aria-describedby="无效值"
                      value={invalidValue}
                      onChange={(value) => setInvalidValue(value)}
                      autoComplete="off"
                      onBlur={() =>
                        onSave({
                          invalidValue: invalidValue === "" ? undefined : invalidValue,
                        })
                      }
                      ouiaId="invalid-value"
                    />
                  </FormGroup>
                </StackItem>
              </Stack>
            </SplitItem>
            <SplitItem isFilled={true}>
              <section className="data-dictionary__constraints-section">
                {constraintAlert && (
                  <Alert
                    variant="warning"
                    isInline={true}
                    className="data-dictionary__validation-alert"
                    title={constraintAlert}
                  />
                )}
                <ConstraintsEdit dataType={dataType} dataFieldIndex={dataFieldIndex} onSave={onSave} />
              </section>
            </SplitItem>
          </Split>
        </Form>
      </StackItem>
      <StackItem>
        <Button
          variant="primary"
          onClick={onClose}
          icon={<ArrowAltCircleLeftIcon />}
          iconPosition="left"
          ouiaId="back-to-DFs"
        >
          返回
        </Button>
      </StackItem>
    </Stack>
  );
};

export default DataDictionaryPropertiesEdit;

import React from 'react'
import {
  Form,
  DatePicker,
  Input,
  Upload,
  Button,
  Select,
  Checkbox,
  Row,
  Col,
  InputNumber,
  Radio,
  Switch,
} from "antd";
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";

const { Dragger } = Upload;
const { TextArea } = Input;

const _dateFormat = ["DD/MM/YYYY", "DD/MM/YY"];

export const FormGenerator = (props) => {
  const { type, bottomElement } = props;

  if (props.type === "date") {
    const {
      onChange,
      value,
      name,
      disabled,
      placeholder,
      formate,
      fieldClassName,
      fieldStyle
    } = props;
    return (
      <Form.Item label={name} className="w-100">
        <DatePicker
          name={name}
          size="large"
          format={formate ? formate: _dateFormat}
          placeholder={placeholder ? placeholder : "DD/MM/YYYY"}
          className={fieldClassName ? fieldClassName : "w-100"}
          style={fieldStyle}
          disabled={disabled}
          onChange={onChange}
          value={
            value ? moment(value, formate ? formate[0] : _dateFormat[0]): ""
          }
        />
      </Form.Item>
    );
  }

  if (type === "text") {
    const {
      onChange,
      value,
      name,
      placeholder,
      fieldStyle,
      fieldClassName,
      customLable,
      fieldId,
      disabled
    } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          {customLable}
          <Input
            placeholder={placeholder ? placeholder : name}
            name={name}
            style={fieldStyle}
            className={fieldClassName}
            value={value}
            onChange={onChange}
            id={fieldId}
            disabled={disabled}
          />
        </Form.Item>
        {bottomElement ? (
          <FormGenerator {...bottomElement} />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }

  if (type === "password") {
    const {
      onChange,
      value,
      name,
      placeholder,
      fieldStyle,
      fieldClassName,
      customLable,
      disabled
    } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          {customLable}
          <Input
            placeholder={placeholder ? placeholder : name}
            name={name}
            type={type}
            style={fieldStyle}
            className={fieldClassName}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </Form.Item>
        {bottomElement ? (
          <FormGenerator {...bottomElement} />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }

  if (type === "number") {
    const {
      onChange,
      value,
      name,
      min,
      max,
      disabled,
      placeholder,
      fieldClassName,
      fieldStyle
    } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          <InputNumber
            placeholder={placeholder ? placeholder : name}
            name={name}
            className={fieldClassName ? fieldClassName : "w-100"}
            style={fieldStyle}
            min={min}
            type={type}
            max={max}
            disabled={disabled}
            value={typeof value === "number" ? value : 0}
            onChange={onChange}
          />
        </Form.Item>
      </React.Fragment>
    );
  }

  if (type === "textarea") {
    const {
      onChange,
      value,
      name,
      placeholder,
      fieldStyle,
      fieldClassName,
      customLable,
      fieldId,
      disabled,
      autoSize
    } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          {customLable}
          <TextArea
            value={value}
            disabled={disabled}
            style={fieldStyle}
            className={fieldClassName}
            id={fieldId}
            onChange={onChange}
            placeholder={placeholder}
            autoSize={autoSize}
          />
        </Form.Item>
        {bottomElement ? (
          <FormGenerator {...bottomElement} />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }

  if (type === "upload") {
    const {
      name,
      onRemove,
      beforeUpload,
      multiple,
      onChange,
      fieldClassName,
      onDownload,
      listType,
      fieldId,
      accept,
      action,
      disabled,
      method
    } = props;
    return (
      <Form.Item label={name}>
        <Upload
          name={name}
          action={action}
          method={method}
          accept={accept}
          onRemove={onRemove}
          listType={listType}
          onDownload={onDownload}
          id={fieldId}
          disabled={disabled}
          onChange={onChange}
          multiple={multiple}
          className={fieldClassName ? fieldClassName : "w-100 text-align-left"}
          beforeUpload={beforeUpload}
        >
          <Button>
            <UploadOutlined /> Upload
          </Button>
        </Upload>
      </Form.Item>
    );
  }

  if (type === "dropBox") {
    const { name, onRemove, onSelect } = props;
    return (
      <Form.Item label={name}>
        <Dragger
          name={name}
          multiple={false}
          onRemove={onRemove}
          className="w-75 text-align-center"
          beforeUpload={onSelect}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          {/* <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p> */}
        </Dragger>
      </Form.Item>
    );
  }

  if (type === "checkbox") {
    const { name, checkboxList } = props;
    return (
      <Form.Item label={name}>
        {checkboxList.map((cb, key) => {
          return (
            <Checkbox
              key={key}
              disabled={cb.disabled}
              onChange={cb.onChange}
              checked={cb.checked === true || cb.checked === "Y" ? true : false}
            >
              {cb.name}
            </Checkbox>
          );
        })}
      </Form.Item>
    );
  }

  if (type === "radio") {
    const { name, radioButtonList, onChange, value, buttonStyle } = props;
    let { breakPoint } = props;
    if (window.innerWidth > 786) {
      breakPoint = null;
    }
    return (
      <Form.Item label={name}>
        <Radio.Group
          onChange={onChange}
          className="w-100"
          value={value}
          buttonStyle={buttonStyle}
        >
          {radioButtonList.map((x, key) => {
            if (buttonStyle) {
              return (
                <React.Fragment key={key}>
                  <Radio.Button value={x.value}>{x.Name}</Radio.Button>
                  {breakPoint && (parseInt(key) + 1) % breakPoint === 0 ? (
                    <br />
                  ) : null}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={key}>
                  <Radio value={x.value}>{x.Name}</Radio>
                  {breakPoint && (parseInt(key) + 1) % breakPoint === 0 ? (
                    <br />
                  ) : null}
                </React.Fragment>
              );
            }
          })}
        </Radio.Group>
      </Form.Item>
    );
  }

  if (type === "select") {
    const {
      name,
      value,
      allowClear,
      showSearch,
      filterOption,
      onChange,
      Fieldstyle,
      FieldclassName,
      customLable,
      fieldId,
      data,
      defaultValue,
    } = props;
    return (
      <Form.Item label={name}>
        {customLable}
        <Select
          allowClear={allowClear ? allowClear.isTrue : true}
          placeholder={name}
          value={value}
          name={name}
          showSearch={showSearch ? showSearch.isTrue : true}
          filterOption={filterOption}
          onChange={onChange}
          defaultValue={defaultValue}
          style={Fieldstyle}
          className={FieldclassName}
          id={fieldId}
        >
          {data.map((x, key) => {
            return (
              <Select.Option key={key} value={x.value ? x.value : x.Name}>
                {x.Name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  }

  if (type === "boolean") {
    const { name, onChange, checked } = props;
    return (
      <Form.Item label={name}>
        <Switch checked={checked} onChange={onChange} />
      </Form.Item>
    );
  }

  if (type === "custom") {
    const { content, name } = props;
    return <Form.Item label={name}>{content}</Form.Item>;
  }

  return <React.Fragment></React.Fragment>;
};

const DynamicForm = ({ script, layout }) => {
  return (
    <Form layout={ layout ? layout: "vertical"}>
      {script.map((row, key_) => {
        return (
          <Row key={key_}>
            {row.map((col, key) => {
              return (
                <Col
                  key={key}
                  lg={col.lg ? col.lg : { span: 11, offset: key % 2 }}
                  sm={24}
                  md={24}
                  xs={24}
                  className={col.colClassName ? col.className : "text-left"}
                >
                  <FormGenerator {...col} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Form>
  );
};

export default DynamicForm;


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
import "antd/dist/antd.css";

const { Dragger } = Upload;
const { TextArea } = Input;

const dateFormat = ["DD/MM/YYYY", "DD/MM/YY"];

export const FormGenerator = (props) => {
  const { type, bottomElement } = props;

  if (props.type === "date") {
    const { onChange, data, name } = props;
    return (
      <Form.Item label={name} className="w-100">
        <DatePicker
          name={name}
          size="large"
          format={dateFormat}
          placeholder="DD/MM/YYYY"
          className="w-100"
          onChange={onChange}
          value={
            data ? moment(data, dateFormat[0]): ""
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
      Fieldstyle,
      FieldclassName,
      customLable,
    } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          {customLable}
          <Input
            placeholder={placeholder ? placeholder : name}
            name={name}
            type={type}
            style={Fieldstyle}
            className={FieldclassName}
            value={value}
            onChange={onChange}
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
    const { onChange, value, name, min, max, disabled } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          <InputNumber
            placeholder={name}
            name={name}
            className={"w-100"}
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
    const { onChange, value, name, autoSize, placeholder } = props;
    return (
      <React.Fragment>
        <Form.Item label={name}>
          <TextArea
            value={value}
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
    const { name, onRemove, onSelect } = props;
    return (
      <Form.Item label={name}>
        <Upload
          name={name}
          multiple={false}
          onRemove={onRemove}
          className="w-100 text-align-left"
          beforeUpload={onSelect}
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

const DynamicForm = ({ script }) => {
  return (
    <Form layout={"vertical"}>
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
                  className={col.className ? col.className : "text-left"}
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


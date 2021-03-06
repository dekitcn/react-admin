import React from 'react';
import DemoPage from '@/library/antd/demo-page';
import * as FormElement from '@/library/antd/components/form-element/demo/FormElement';
import config from '@/commons/config-hoc';

const demos = [
    {
        component: FormElement.default,
        title: FormElement.title,
        markdown: FormElement.markdown,
        code: `
import React, {Component} from 'react';
import {Form, Button} from 'antd';
import {FormElement} from '../sx-antd';

@Form.create()
export default class extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {form} = this.props;
        const labelWidth = 100;

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormElement
                        form={form}
                        type="number"
                        field="number"
                        label="数字"
                        labelWidth={labelWidth}
                        placeholder="请输入数字"
                        decorator={{
                            rules: [
                                {required: true, message: '不能为空！'}
                            ],
                        }}
                    >
                        <span className="ant-form-text"> machines</span>
                    </FormElement>

                    <FormElement
                        form={form}
                        type="input"
                        field="input"
                        label="输入框"
                        labelWidth={labelWidth}
                        placeholder="请输入"
                        decorator={{
                            rules: [
                                {required: true, message: '不能为空！'}
                            ],
                        }}
                    />

                    <FormElement
                        form={form}
                        type="select"
                        field="select"
                        label="下拉框"
                        labelWidth={labelWidth}
                        placeholder="请选择"
                        options={[
                            {label: '选项一', value: '1'},
                            {label: '选项二', value: '2'},
                            {label: '选项三', value: '3'},
                            {label: '选项四', value: '4'},
                            {label: '选项五', value: '5'},
                        ]}
                    />
                    <FormElement
                        form={form}
                        type="date"
                        field="date"
                        label="日期"
                        labelWidth={labelWidth}
                        placeholder="请选择日期"
                        width={200}
                    />
                    <Form.Item
                        wrapperCol={{span: 12, offset: 6}}
                    >
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}


        `,
    },
];
const readme = `# 表单元素

通过配置方式，获取表单元素

`;
const api = `## API


参数|说明|类型|默认值
---|---|---|---
type | 元素类型，可用类型有：input,hidden,number,textarea,password,mobile,email,select,select-tree,checkbox,checkbox-group,radio,radio-group,switch,date,date-range,month,time,cascader | string | 'input'
component | 自定义元素，如果配合Form使用，此组件请提供value onChange属性 | ReactNode 或 function | - 
其他 | 其他属性为Ant Design Form.Item 和表单元素提供的属性 | - | - 
`;

@config({
    path: '/example/antd/form-element',
})
export default class extends React.Component {
    render() {
        return <DemoPage demos={demos} readme={readme} api={api}/>;
    }
};

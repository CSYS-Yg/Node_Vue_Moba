import React from 'react';
import { Editor } from "@tinymce/tinymce-react";
/*
* @props string id? 标识符
* @props number height? 高度
* @props string defaultContent? 初始内容
* @props boolen disabled? 禁用
* @props function onDelete? 删除事件
* @props function onAdd? 添加事件
* @props object uploadConfig? 自定义上传配置
* @event function getEditorContent 获取编辑内容
* @event function setEditorContent 设置编辑内容
* @event function insertContent 插入编辑内容
*/

class App extends React.Component {
    state = {
        editorState: 123456,
    }
    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }

    render() {
        const editorObj = {
            height: '800px',
            language: 'zh_CN',
            // language_url: zh_CN,
            plugins: 'table lists link image preview code',
            toolbar: `formatselect | code | preview | bold italic strikethrough forecolor backcolor | 
      link image | alignleft aligncenter alignright alignjustify  | 
      numlist bullist outdent indent`,
            relative_urls: false,
            file_picker_types: 'image',
            // images_upload_url: { '上传图片的路径'},
            image_advtab: true,
            content_css: false,
            image_uploadtab: true,
            images_upload_handler: (blobInfo, success, failure) => {
                //这里写你上传图片的方法
            }
        }
        return (
            <Editor
                inline={false}
                selector='editorStateRef'  // 选择器
                apiKey='官网上申请的key值'
                initialValue={this.state.editorState}
                init={{ ...editorObj }}
                onEditorChange={this.handleEditorChange}
            />
        );
    }
}

export default App;
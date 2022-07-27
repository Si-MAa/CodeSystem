<!--
<template>
    <div>
        <head-top></head-top>

        <div class="edit_container">
        	<quill-editor v-model="content"
                ref="myQuillEditor"
                class="editer"
                :options="editorOption"
                @ready="onEditorReady($event)">
  			</quill-editor>
        </div>
        <div class="submit_btn">
  			<el-button type="primary" @click="submit">提交</el-button>
        </div>

    </div>
</template>
-->
<!--
<script>
    import headTop from '../components/headTop'
    import { quillEditor } from 'vue-quill-editor'

    export default {
        data(){
            return {
                content: '<h3>文本编辑</h3>',
			    editorOption: {

		        }
            }
        },
    	components: {
    		headTop,
    		quillEditor,
    	},
        computed: {
          	editor() {
	        	return this.$refs.myQuillEditor.quill
	      	}
        },
        methods: {
		    onEditorReady(editor) {
		        console.log('editor ready!', editor)
		    },
		    submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.edit_container{
		padding: 40px;
		margin-bottom: 40px;
	}
	.editer{
		height: 350px;
	}
	.submit_btn{
		text-align: center;
	}
</style>
-->

<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="原料编码" required="true">
                    <a-input-group compact>
                        <a-input style="width: 8%" value="C" read-only="true" />
                        <a-input style="width: 25%" type="text" />
                        <a-select default-value="A">
                            <a-select-option value="A">
                                A：非保税
                            </a-select-option>
                            <a-select-option value="B">
                                B：保税
                            </a-select-option>
                        </a-select>
                        <a-select style="width: 25%">
                            <a-select-option value="R">
                                R：符合ROHS
                            </a-select-option>
                            <a-select-option value="K">
                                K：客供
                            </a-select-option>
                        </a-select>
                    </a-input-group>
                </a-form-item>
                <a-form-item label="日期" required="true">
                    <a-date-picker style="width: 100%" placeholder="选择日期"/>
                </a-form-item>
                <a-form-item label="所在单位" required="true" >
                    <a-select default-value=" " style="width: 100%">
                        <a-select-option value="1">
                            苏州
                        </a-select-option>
                        <a-select-option value="2">
                            泰兴
                        </a-select-option>
                        <a-select-option value="3">
                            南通
                        </a-select-option>
                        <a-select-option value="4">
                            数标
                        </a-select-option>
                        <a-select-option value="5">
                            明利嘉
                        </a-select-option>
                        <a-select-option value="6">
                            晋城
                        </a-select-option>
                        <a-select-option value="7">
                            远东
                        </a-select-option>
                        <a-select-option value="8">
                            吴江
                        </a-select-option>
                        <a-select-option value="9">
                            青岛
                        </a-select-option>
                        <a-select-option value="10">
                            上海
                        </a-select-option>
                        <a-select-option value="11">
                            南京
                        </a-select-option>
                        <a-select-option value="12">
                            东莞
                        </a-select-option>
                        <a-select-option value="13">
                            厦门
                        </a-select-option>
                        <a-select-option value="14">
                            广州
                        </a-select-option>
                        <a-select-option value="15">
                            深圳
                        </a-select-option>
                        <a-select-option value="16">
                            威海
                        </a-select-option>
                        <a-select-option value="17">
                            滁州
                        </a-select-option>
                        <a-select-option value="18">
                            无锡
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="申请人" required="true" >
                    <a-input  style="width: 100%" />
                </a-form-item>
                <a-form-item label="原料全称" required="true">
                    <a-input  style="width: 100%"/>
                </a-form-item>
                <a-form-item label="存货代码" required="true">
                    <a-input  style="width: 100%"/>
                </a-form-item>
                <a-form-item label="规格型号" required="true">
                    <a-input  style="width: 100%"/>
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                    <a-button type="primary" html-type="submit">
                        生成并保存
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import headTop from '../components/headTop'


export default {
    data() {
        return {
            code: '',
            labelCol: {
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };
    },
    components: {
        headTop,
    },
}
</script>

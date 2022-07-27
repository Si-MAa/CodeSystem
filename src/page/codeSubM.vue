<!--
<template>
    <div class="fillcontain">
        <head-top></head-top>


        <header class="admin_title">管理员信息</header>
        <div class="admin_set">
            <ul>
                <li>
                    <span>姓名：</span><span>{{adminInfo.user_name}}</span>
                </li>
                <li>
                    <span>注册时间：</span><span>{{adminInfo.create_time}}</span>
                </li>
                <li>
                    <span>管理员权限：</span><span>{{adminInfo.admin}}</span>
                </li>
                <li>
                    <span>管理员 ID：</span><span>{{adminInfo.id}}</span>
                </li>
                <li>
                    <span>更换头像：</span>
                    <el-upload
                      class="avatar-uploader"
                      :action="baseUrl + '/admin/update/avatar/' + adminInfo.id"
                      :show-file-list="false"
                      :on-success="uploadImg"
                      :before-upload="beforeImgUpload">
                      <img v-if="adminInfo.avatar" :src="baseImgPath + adminInfo.avatar" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </li>
            </ul>
        </div>
    </div>
</template>
-->

<!--
<script>
	import headTop from '../components/headTop'
    import {mapState} from 'vuex'
    import {baseUrl, baseImgPath} from '@/config/env'

    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,
            }
        },
    	components: {
    		headTop,
    	},
        computed: {
            ...mapState(['adminInfo']),
        },
        methods: {
            uploadImg(res, file) {
                if (res.status == 1) {
                    this.adminInfo.avatar = res.image_path;
                }else{
                    this.$message.error('上传图片失败！');
                }
            },
            beforeImgUpload(file) {
                const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isRightType) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isRightType && isLt2M;
            },
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
    .admin_set{
        width: 60%;
        background-color: #F9FAFC;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
        ul > li{
            padding: 20px;
            span{
                color: #666;
            }
        }
    }
    .admin_title{
        margin-top: 20px;
        .sc(24px, #666);
        text-align: center;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        margin-top: 10px;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>
-->

<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="辅料编码" required="true">
                    <a-input-group compact>
                        <a-input style="width: 8%" value="F" read-only="true" />
                        <a-input style="width: 25%" type="text" />
                        <a-select default-value="A">
                            <a-select-option value="A">
                                A：非保税
                            </a-select-option>
                            <a-select-option value="B">
                                B：保税
                            </a-select-option>
                        </a-select>
                        <a-select default-value="0" >
                            <a-select-option value="0">
                                0
                            </a-select-option>
                            <a-select-option value="1">
                                1
                            </a-select-option>
                            <a-select-option value="2">
                                2
                            </a-select-option>
                            <a-select-option value="3">
                                3
                            </a-select-option>
                            <a-select-option value="4">
                               4
                            </a-select-option>
                            <a-select-option value="5">
                                5
                            </a-select-option>
                            <a-select-option value="6">
                               6
                            </a-select-option>
                            <a-select-option value="7">
                                7
                            </a-select-option>
                            <a-select-option value="8">
                                8
                            </a-select-option>
                            <a-select-option value="9">
                                9
                            </a-select-option>
                        </a-select>
                    </a-input-group>
                </a-form-item>
                <a-form-item label="日期" required="true">
                    <a-date-picker style="width: 100%" placeholder="选择日期" />
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
                <a-form-item label="辅料全称" required="true">
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

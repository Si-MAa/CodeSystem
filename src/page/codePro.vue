<!--
<template>
    <div class="fillcontain">
        <head-top></head-top>
        <p class="explain_text">node-elm后台管理系统</p>
        <p class="explain_text">第一次登录的用户自动注册成为普通管理员</p>
        <p class="explain_text">普通管理员可以添加，修改信息</p>
        <p class="explain_text">超级管理员可以删除信息</p>
    </div>
</template>
-->
<!--
<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
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
</style> -->
<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="资产编码" required="true">
                    <a-input-group compact>
                        <a-select  placeholder="资产类别" style="width: 25%">
                            <a-select-option value="G">
                                G：固定资产
                            </a-select-option>
                            <a-select-option value="L">
                                L：列管资产
                            </a-select-option>
                        </a-select>
                        <a-select  placeholder="申请单位" style="width: 25%" >
                            <a-select-option value="JFHQ">
                                苏州锦富
                            </a-select-option>
                            <a-select-option value="JFSZ">
                                苏州挚富
                            </a-select-option>
                            <a-select-option value="SHZF">
                                上海挚富
                            </a-select-option>
                            <a-select-option value="JFDG">
                                东莞锦富
                            </a-select-option>
                            <a-select-option value="JFZX">
                                无锡正先
                            </a-select-option>
                            <a-select-option value="SHXB">
                                上海锦微
                            </a-select-option>
                            <a-select-option value="LFXM">
                                厦门力富
                            </a-select-option>
                            <a-select-option value="JFWH">
                                威海锦富
                            </a-select-option>
                            <a-select-option value="JFGZ">
                                广州恩披特
                            </a-select-option>
                            <a-select-option value="JFCZ">
                                滁州锦富
                            </a-select-option>
                            <a-select-option value="HOHK">
                                香港赫欧
                            </a-select-option>
                            <a-select-option value="AISZ">
                                奥英光电
                            </a-select-option>
                            <a-select-option value="JFMZ">
                                昆山迈致
                            </a-select-option>
                            <a-select-option value="JFTX">
                                泰兴挚富
                            </a-select-option>
                            <a-select-option value="JFML">
                                常熟明利嘉
                            </a-select-option>
                            <a-select-option value="JFYN">
                                越南锦富
                            </a-select-option>
                            <a-select-option value="SHSJ">
                                上海神洁
                            </a-select-option>
                            <a-select-option value="JFQT">
                                其他公司
                            </a-select-option>
                        </a-select>
                        <a-select  placeholder="资产类型" style="width: 25%">
                            <a-select-option value="HB">
                                房屋建筑物
                            </a-select-option>
                            <a-select-option value="ME">
                                机器设备
                            </a-select-option>
                            <a-select-option value="TE">
                                运输设备
                            </a-select-option>
                            <a-select-option value="IM">
                                仪器仪表
                            </a-select-option>
                            <a-select-option value="FE">
                                水电/场务设备
                            </a-select-option>
                            <a-select-option value="OR">
                                饰品
                            </a-select-option>
                            <a-select-option value="FU">
                                家私（桌、椅、柜..）
                            </a-select-option>
                            <a-select-option value="KW">
                                厨房用具
                            </a-select-option>
                            <a-select-option value="SM">
                                服务器
                            </a-select-option>
                            <a-select-option value="ND">
                                网络设备
                            </a-select-option>
                            <a-select-option value="NB">
                                笔记本电脑
                            </a-select-option>
                            <a-select-option value="DC">
                                台式电脑
                            </a-select-option>
                            <a-select-option value="MD">
                                显示器
                            </a-select-option>
                            <a-select-option value="TEL">
                                电话机
                            </a-select-option>
                            <a-select-option value="PRO">
                                投影仪
                            </a-select-option>
                            <a-select-option value="TV">
                                电视机
                            </a-select-option>
                            <a-select-option value="UPS">
                                不间断电源
                            </a-select-option>
                            <a-select-option value="PRINT">
                                打印机
                            </a-select-option>
                            <a-select-option value="CABINT">
                                机柜
                            </a-select-option>
                            <a-select-option value="CARD">
                                刷卡机
                            </a-select-option>
                            <a-select-option value="AIRC">
                                空调
                            </a-select-option>
                            <a-select-option value="IT">
                                其他电子电器
                            </a-select-option>
                            <a-select-option value="TA">
                                周转物
                            </a-select-option>
                            <a-select-option value="SP">
                                其他（备品备件）
                            </a-select-option>



                        </a-select >
                        <a-date-picker style="width: 25%"  placeholder="启用日期" />
                    </a-input-group>
                </a-form-item>
                <a-form-item label="日期" required="true">
                    <a-date-picker style="width: 100%" placeholder="填写日期" />
                </a-form-item>
                <a-form-item label="申请人" required="true" >
                    <a-input  style="width: 100%" />
                </a-form-item>
                <a-form-item label="资产名称" required="true">
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

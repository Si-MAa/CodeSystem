<!--
<template>
    <div>
        <head-top></head-top>
        <visitor-pie :pieData="pieData"></visitor-pie>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    import visitorPie from '@/components/visitorPie'
	import {getUserCity} from '@/api/getData'
    export default {
    	data(){
    		return {
    			pieData: {},
    		}
    	},
    	components: {
    		headTop,
            visitorPie,
    	},
    	mounted(){
    		this.initData();
    	},
    	methods: {
    		async initData(){
    			try{
    				const res = await getUserCity();
    				if (res.status == 1) {
    					this.pieData = res.user_city;
    				}else{
    					throw new Error(res)
    				}
    			}catch(err){
    				console.log('获取用户分布信息失败',err);
    			}
    		},
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';

</style>
-->

<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item label="成品编码" required="true">
                    <a-input-group compact>
                        <a-input style="width: 8%" value="A" read-only="true" />
                        <a-input style="width: 30%" type="text" v-model="note" maxLength="4"
                                 placeholder="对应客户的4位缩写码"/>
                        <a-input style="width: 25%" type="text" />
                        <a-select default-value="A">
                            <a-select-option value="A">
                                A：非保税
                            </a-select-option>
                            <a-select-option value="B">
                                B：保税
                            </a-select-option>
                        </a-select>
                        <a-select default-value="1">
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
                <a-form-item label="成品全称" required="true">
                    <a-input  style="width: 100%"/>
                </a-form-item>
                <a-form-item label="存货代码" required="true">
                    <a-input  style="width: 100%"/>
                </a-form-item>
                <a-form-item label="规格型号" required="true">
                    <a-input  style="width: 100%"/>
                </a-form-item>
                <a-form-item label="对应客户编码" required="true">
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
    computed: {
        note: {
            get: function () {
                return this.code;
            },
            set: function (val) {
                this.code = val.toUpperCase();
            }
        }
    }
}
</script>

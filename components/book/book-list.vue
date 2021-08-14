<template>
    <div class="book-list-wrap">
        <div class="tab-menu-wrap">
            <ul>
                <li :class="{select:tabSelect==0}"><button @click="selectTab(0)">용어</button></li>
                <li :class="{select:tabSelect==1}"><button @click="selectTab(1)">해칭 계산</button></li>
                <li :class="{select:tabSelect==2}"><button @click="selectTab(2)">적재 사이즈</button></li>
                <li :class="{select:tabSelect==3}"><button @click="selectTab(3)">천공 렌즈</button></li>
            </ul>
        </div>
        <div class="tab-content-wrap">
            <div v-if="tabSelect == 0" class="tab-content">
                <ul class="book-list">
                    <li>
                        <div class="name">CG</div>
                        <div class="info">Crested Gecko(Rhacodactylus ciliatus) 크레스티드 게코</div>
                    </li>
                    <li>
                        <div class="name">Cal</div>
                        <div class="info">칼슘</div>
                    </li>
                    <li>
                        <div class="name">CB(Captive Born)</div>
                        <div class="info">사육환경에서 부화</div>
                    </li>
                    <li>
                        <div class="name">CBB(Captive Born and Bred)</div>
                        <div class="info">사육환경에서 브리딩 & 부화</div>
                    </li>
                    <li>
                        <div class="name">CH(Captive Hatched)</div>
                        <div class="info">사육환경에서 부화</div>
                    </li>
                    <li>
                        <div class="name">FTS(Floppy Tail Syndrome)</div>
                        <div class="info">플로피테일신드롬 - 등으로 꼬리뿌리 뼈에 변형이 온 상태</div>
                    </li>
                    <li>
                        <div class="name">MDB(Metabolic Bone Disease)</div>
                        <div class="info">대사성골질환</div>
                    </li>
                    <li>
                        <div class="name">RTB(Ready To Breed)</div>
                        <div class="info">몸무게, 사이즈, 나이 등이 번식에 적합함</div>
                    </li>
                    <li>
                        <div class="name">NFS(Not For Sale)</div>
                        <div class="info">분양하지 않고 자랑하기 위함 ㅋㅋ</div>
                    </li>
                    <li>
                        <div class="name">WC(Wild Caught)</div>
                        <div class="info">야생 포획 개체</div>
                    </li>
                    <li>
                        <div class="name">WTB(Want To Buy)</div>
                        <div class="info">입양 희망 개체</div>
                    </li>
                    <li>
                        <div class="name">WTS(Want To Sell)</div>
                        <div class="info">분양 희망 개체</div>
                    </li>
                </ul>
            </div>
            <div v-if="tabSelect == 1" class="tab-content">
                <div>
                    <label>산란일</label><date-picker :language="ko" type="date" @selected="changeDate" placeholder="YYYY/MM/DD" format="yyyy/MM/dd" v-model="selectDate" />
                    <label>온도</label><input type="number" v-model="selectTemperature" @change="changeTemperature" />
                    <p>부화기간 : {{hatchAddDate}}</p>
                    <p>예상 해칭일 : {{hatchDate}}</p>
                </div>
            </div>
            <div v-if="tabSelect == 2" class="tab-content">
                <ul>
                    <li>적재 소 : 16.0cm x 10.6cm</li>
                    <li>적재 중 : 21.0cm x 12.4cm</li>
                    <li>적재 대 : 28.8cm x 17.4cm</li>
                    <li>유도리 : 26.5cm x 26.0cm</li>
                </ul>
                
            </div>
            <div v-if="tabSelect == 3" class="tab-content">
                <div>일우</div>
                <img src="/images/book/ilwoo.jpg"/>
                <img src="/images/book/ilwoo2.jpg"/>
                <div>다이소</div>
                <img src="/images/book/daiso.jpg"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import {ko} from 'vuejs-datepicker/dist/locale'
export default {
    data : function(){
        return {
            ko:ko,
            tabSelect : 0,
            selectTemperature:23,
            hatchDate:null,
            selectDate:this.$moment().format('YYYY-MM-DD'),
            hatchAddDate:0
        }
    }
    ,
    mounted(){
        this.changeResult();
    },
    methods:{
        selectTab(select){
            this.tabSelect = select;
        },
        changeDate(date){
            this.selectDate = date
            this.changeResult();
        },
        changeTemperature(){
            this.changeResult();
        },
        changeResult(){
            this.hatchAddDate = ((25 - this.selectTemperature) * 10 + 60).toFixed();
            
            this.hatchDate = this.$moment(this.selectDate).add(this.hatchAddDate, 'days').format('YYYY년 MM월 DD일');
        }

    }
}
</script>
<style lang="scss" src="./book-list.scss"></style>
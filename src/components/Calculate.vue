<template>
    <div class="calculate">

      <router-link to="jsonCalc" class="btn">Json Calculate</router-link>

      <h1>Расчёт стоимости проекта</h1>
      <form action="#" method="post">
        <label>
          <span>Название проекта:</span>
          <input type="text" v-model="projectName" placeholder="Название проекта..." required>
        </label>
        <label>
          <span>Стоимость прототипа:</span>
          <input type="number" min="0" v-model="projectCostPrototype" placeholder="Стоимость прототипа...">
        </label>
        <label>
          <span>Стоимость дизайна:</span>
          <input type="number" min="0" v-model="projectCostDesign" placeholder="Стоимость дизайна...">
        </label>
        <label>
          <span>Стоимость вёрстки:</span>
          <input type="number" min="0" v-model="projectCostFront" placeholder="Стоимость вёрстки...">
        </label>
        <label>
          <span>Стоимость бэкенда:</span>
          <input type="number" min="0" v-model="projectCostBack" placeholder="Стоимость бэкенда...">
        </label>
        <label>
          <span>Стоимость контекстной рекламы Google:</span>
          <input type="number" min="0" v-model="projectCostGoogle" placeholder="Стоимость Google...">
        </label>
        <label>
          <span>Стоимость контекстной рекламы Yandex:</span>
          <input type="number" min="0" v-model="projectCostYandex" placeholder="Стоимость Yandex...">
        </label>
        <label>
          <span>Стоимость СЕО продвижения:</span>
          <input type="number" min="0" v-model="projectCostSEO" placeholder="Стоимость СЕО...">
        </label>
        <!--<label>
          <span>Прочие расходы:</span>
          <input type="number" min="0" v-model="projectCostOther" placeholder="Стоимость прочих расходов...">
        </label>-->
        <label>
          <span>Надбавка компании в % от стоимости работы:</span>
          <input type="number" min="0" v-model="projectCostCompany" placeholder="Надбавка компании...">
        </label>
        <label>
          <span>Оплата менеджеру в % от стоимости проекта:</span>
          <input type="number" min="0" v-model="projectCostManager" placeholder="Услуги менеджера...">
        </label>
        <label>
          <span>Соц. взнос в % от ЗП сотрудника:</span>
          <input type="number" min="0" v-model="projectCostSocPercent" placeholder="Соц. взнос...">
        </label>
        <label>
          <span>КЛП в % от прибыли компании :</span>
          <input type="number" min="0" v-model="projectCostClp" placeholder="КЛП...">
        </label>
        <label>
          <span>Налог в % от стоимости проекта:</span>
          <input type="number" min="0" v-model="projectCostTax" placeholder="Налог...">
        </label>
      </form>

      <div class="resultTable" v-if="this.projectResultWorkersPay > 0">
        <h2>Стоимость проекта <span v-if="projectName > ''">{{ ' "' + projectName + '"' }}</span></h2>
        <table>
          <thead>
            <tr>
              <th rowspan="3">Название услуги</th>
              <th colspan="3">Исполнитель</th>
              <th colspan="9">Компания</th>
            </tr>
            <tr>
              <th rowspan="2">ЗП</th>
              <th rowspan="2">Соц. {{ projectCostSocPercent }}%</th>
              <th rowspan="2">Полная</th>
              <th colspan="2">Надбавка</th>
              <th colspan="3">Менеджеру</th>
              <th colspan="5">Прибыль</th>
            </tr>
            <tr>
              <th>{{ projectCostCompany }} %</th>
              <th>К оплате</th>
              <th>ЗП {{ projectCostManager }} %</th>
              <th>Соц {{ projectCostSocPercent }}%</th>
              <th>Полная</th>
              <th>Получено</th>
              <th>КЛП {{ projectCostClp }}%</th>
              <th>Налог {{ projectCostTax }}%</th>
              <th>Чистая</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="projectCostPrototype > 0">
              <td>Прототип</td>
              <td>{{ projectCostPrototype }}</td>
              <td>{{ this.projectCostPrototypeSoc }}</td>
              <td>{{ this.projectCostPrototypePay }}</td>
              <td>{{ this.projectCostPrototypeCompanyPercent }}</td>
              <td>{{ this.projectCostPrototypeFull }}</td>
              <td>{{ this.projectCostPrototypeManager }}</td>
              <td>{{ this.projectCostPrototypeManagerSoc }}</td>
              <td>{{ this.projectCostPrototypeManagerFull }}</td>
              <td>{{ this.projectCostPrototypeCompanyGet }}</td>
              <td>{{ this.projectCostPrototypeCompanyClp }}</td>
              <td>{{ this.projectCostPrototypeCompanyTax }}</td>
              <td>{{ this.projectCostPrototypeCompanyClean }}</td>
            </tr>
            <tr v-if="projectCostDesign > 0">
              <td>Дизайн</td>
              <td>{{ projectCostDesign }}</td>
              <td>{{ this.projectCostDesignSoc }}</td>
              <td>{{ this.projectCostDesignPay }}</td>
              <td>{{ this.projectCostDesignCompanyPercent }}</td>
              <td>{{ this.projectCostDesignFull }}</td>
              <td>{{ this.projectCostDesignManager }}</td>
              <td>{{ this.projectCostDesignManagerSoc }}</td>
              <td>{{ this.projectCostDesignManagerFull }}</td>
              <td>{{ this.projectCostDesignCompanyGet }}</td>
              <td>{{ this.projectCostDesignCompanyClp }}</td>
              <td>{{ this.projectCostDesignCompanyTax }}</td>
              <td>{{ this.projectCostDesignCompanyClean }}</td>
            </tr>
            <tr v-if="projectCostFront > 0">
              <td>Вёрстка</td>
              <td>{{ projectCostFront }}</td>
              <td>{{ this.projectCostFrontSoc }}</td>
              <td>{{ this.projectCostFrontPay }}</td>
              <td>{{ this.projectCostFrontCompanyPercent }}</td>
              <td>{{ this.projectCostFrontFull }}</td>
              <td>{{ this.projectCostFrontManager }}</td>
              <td>{{ this.projectCostFrontManagerSoc }}</td>
              <td>{{ this.projectCostFrontManagerFull }}</td>
              <td>{{ this.projectCostFrontCompanyGet }}</td>
              <td>{{ this.projectCostFrontCompanyClp }}</td>
              <td>{{ this.projectCostFrontCompanyTax }}</td>
              <td>{{ this.projectCostFrontCompanyClean }}</td>
            </tr>
            <tr v-if="projectCostBack > 0">
              <td>Бэкенд</td>
              <td>{{ projectCostBack }}</td>
              <td>{{ this.projectCostBackSoc }}</td>
              <td>{{ this.projectCostBackPay }}</td>
              <td>{{ this.projectCostBackCompanyPercent }}</td>
              <td>{{ this.projectCostBackFull }}</td>
              <td>{{ this.projectCostBackManager }}</td>
              <td>{{ this.projectCostBackManagerSoc }}</td>
              <td>{{ this.projectCostBackManagerFull }}</td>
              <td>{{ this.projectCostBackCompanyGet }}</td>
              <td>{{ this.projectCostBackCompanyClp }}</td>
              <td>{{ this.projectCostBackCompanyTax }}</td>
              <td>{{ this.projectCostBackCompanyClean }}</td>
            </tr>
            <tr v-if="projectCostGoogle > 0">
              <td>Контекстная Google</td>
              <td>{{ projectCostGoogle }}</td>
              <td>{{ this.projectCostGoogleSoc }}</td>
              <td>{{ this.projectCostGooglePay }}</td>
              <td>{{ this.projectCostGoogleCompanyPercent }}</td>
              <td>{{ this.projectCostGoogleFull }}</td>
              <td>{{ this.projectCostGoogleManager }}</td>
              <td>{{ this.projectCostGoogleManagerSoc }}</td>
              <td>{{ this.projectCostGoogleManagerFull }}</td>
              <td>{{ this.projectCostGoogleCompanyGet }}</td>
              <td>{{ this.projectCostGoogleCompanyClp }}</td>
              <td>{{ this.projectCostGoogleCompanyTax }}</td>
              <td>{{ this.projectCostGoogleCompanyClean }}</td>
            </tr>
            <tr v-if="projectCostYandex > 0">
              <td>Контекстная Yandex</td>
              <td>{{ projectCostYandex }}</td>
              <td>{{ this.projectCostYandexSoc }}</td>
              <td>{{ this.projectCostYandexPay }}</td>
              <td>{{ this.projectCostYandexCompanyPercent }}</td>
              <td>{{ this.projectCostYandexFull }}</td>
              <td>{{ this.projectCostYandexManager }}</td>
              <td>{{ this.projectCostYandexManagerSoc }}</td>
              <td>{{ this.projectCostYandexManagerFull }}</td>
              <td>{{ this.projectCostYandexCompanyGet }}</td>
              <td>{{ this.projectCostYandexCompanyClp }}</td>
              <td>{{ this.projectCostYandexCompanyTax }}</td>
              <td>{{ this.projectCostYandexCompanyClean }}</td>
            </tr>
            <tr v-if="projectCostSEO > 0">
              <td>СЕО</td>
              <td>{{ projectCostSEO }}</td>
              <td>{{ this.projectCostSEOSoc }}</td>
              <td>{{ this.projectCostSEOPay }}</td>
              <td>{{ this.projectCostSEOCompanyPercent }}</td>
              <td>{{ this.projectCostSEOFull }}</td>
              <td>{{ this.projectCostSEOManager }}</td>
              <td>{{ this.projectCostSEOManagerSoc }}</td>
              <td>{{ this.projectCostSEOManagerFull }}</td>
              <td>{{ this.projectCostSEOCompanyGet }}</td>
              <td>{{ this.projectCostSEOCompanyClp }}</td>
              <td>{{ this.projectCostSEOCompanyTax }}</td>
              <td>{{ this.projectCostSEOCompanyClean }}</td>
            </tr>
            <!--<tr>
              <td>Прочие</td>
              <td>{{ projectCostOther }}</td>
              <td>{{ this.projectCostOtherSoc }}</td>
              <td>{{ this.projectCostOtherPay }}</td>
              <td>{{ this.projectCostOtherCompanyPercent }}</td>
              <td>{{ this.projectCostOtherFull }}</td>
              <td>{{ this.projectCostOtherManager }}</td>
              <td>{{ this.projectCostOtherManagerSoc }}</td>
              <td>{{ this.projectCostOtherManagerFull }}</td>
              <td>{{ this.projectCostOtherCompanyGet }}</td>
              <td>{{ this.projectCostOtherCompanyClp }}</td>
              <td>{{ this.projectCostOtherCompanyTax }}</td>
              <td>{{ this.projectCostOtherCompanyClean }}</td>
            </tr>-->
          </tbody>
          <tfoot>
            <tr>
              <td>Итого:</td>
              <td>{{ this.projectResultWorkersPay }}</td>
              <td>{{ this.projectResultWorkersPaySoc }}</td>
              <td>{{ this.projectResultWorkersPayFull }}</td>
              <td>{{ this.projectResultCompanyPercent }}</td>
              <td>{{ this.projectResultClientPay }}</td>
              <td>{{ this.projectResultManager }}</td>
              <td>{{ this.projectResultManagerSoc }}</td>
              <td>{{ this.projectResultManagerFull }}</td>
              <td>{{ this.projectResultCompanyGet }}</td>
              <td>{{ this.projectResultCompanyClp }}</td>
              <td>{{ this.projectResultCompanyTax }}</td>
              <td>{{ this.projectResultCompanyClean }}</td>
            </tr>
          </tfoot>
        </table>

        <button class="btn" onclick="window.print()" type="button">Распечатать</button>

      </div>

    </div>
</template>

<script>
export default {
  name: 'calculate',
  data () {
    return {
      projectName: '',
      projectCostPrototype: 0,
      projectCostDesign: 0,
      projectCostFront: 0,
      projectCostBack: 0,
      projectCostGoogle: 0,
      projectCostYandex: 0,
      projectCostSEO: 0,
      projectCostOther: 0,
      projectCostManager: 10,
      projectCostClp: 11,
      projectCostSocPercent: 5,
      projectCostCompany: 100,
      projectCostTax: 16
    }
  },
  methods: {
    getPercent: function (number, percent) {
      return (+number / 100) * percent
    },
    projectCostServiceSoc: function (costService, percent) {
      return (Math.round(this.getPercent(costService, percent) * 100) / 100)
    },
    projectCostServicePay: function (costService, costServiceSoc) {
      return ((Math.round((+costService + (+costServiceSoc)) * 100)) / 100)
    },
    projectCostServiceCompanyPercent: function (costService, costCompany) {
      return (Math.round(this.getPercent(costService, costCompany) * 100) / 100)
    },
    projectCostServiceFull: function (costService, companyPercent) {
      return (Math.round((+costService + (+companyPercent)) * 100) / 100)
    },
    projectCostServiceManager: function (costServiceFull, costManager) {
      return (Math.round(this.getPercent(costServiceFull, costManager) * 100) / 100)
    },
    projectCostServiceSocManagerSoc: function (managerPay, costServiceSoc) {
      return (Math.round(this.getPercent(managerPay, costServiceSoc) * 100) / 100)
    },
    projectCostServiceSocManagerFull: function (managerPay, managerSoc) {
      return (Math.round((+managerPay + (+managerSoc)) * 100) / 100)
    },
    projectCostServiceCompanyGet: function (serviceCostFull, serviceCostWorkerPay, serviceCostManagerPay) {
      return (Math.round(((+serviceCostFull) - (+serviceCostWorkerPay) - (+serviceCostManagerPay)) * 100) / 100)
    },
    projectCostServiceCompanyClp: function (costServiceCompanyGet, clpPercent) {
      return (Math.round(this.getPercent(+costServiceCompanyGet, +clpPercent) * 100) / 100)
    },
    projectCostServiceCompanyTax: function (costServiceFull, tax) {
      return (Math.round(this.getPercent(costServiceFull, tax) * 100) / 100)
    },
    projectCostServiceCompanyClean: function (costServiceCompanyGet, costServiceClp, costServiceTax) {
      return (Math.round(((+costServiceCompanyGet) - (+costServiceClp) - (+costServiceTax)) * 100) / 100)
    }
  },
  computed: {
    // Prototype
    projectCostPrototypeSoc: function () {
      return this.projectCostServiceSoc(this.projectCostPrototype, this.projectCostSocPercent)
    },
    projectCostPrototypePay: function () {
      return this.projectCostServicePay(this.projectCostPrototype, this.projectCostPrototypeSoc)
    },
    projectCostPrototypeCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostPrototype, this.projectCostCompany)
    },
    projectCostPrototypeFull: function () {
      return this.projectCostServiceFull(this.projectCostPrototype, this.projectCostPrototypeCompanyPercent)
    },
    projectCostPrototypeManager: function () {
      return this.projectCostServiceManager(+this.projectCostPrototypeFull, this.projectCostManager)
    },
    projectCostPrototypeManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostPrototypeManager, this.projectCostSocPercent)
    },
    projectCostPrototypeManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostPrototypeManager, this.projectCostPrototypeManagerSoc)
    },
    projectCostPrototypeCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostPrototypeFull, this.projectCostPrototypePay, this.projectCostPrototypeManagerFull)
    },
    projectCostPrototypeCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostPrototypeCompanyGet, this.projectCostClp)
    },
    projectCostPrototypeCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostPrototypeFull, this.projectCostTax)
    },
    projectCostPrototypeCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostPrototypeCompanyGet, this.projectCostPrototypeCompanyClp, this.projectCostPrototypeCompanyTax)
    },
    // Design
    projectCostDesignSoc: function () {
      return this.projectCostServiceSoc(this.projectCostDesign, this.projectCostSocPercent)
    },
    projectCostDesignPay: function () {
      return this.projectCostServicePay(this.projectCostDesign, this.projectCostDesignSoc)
    },
    projectCostDesignCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostDesign, this.projectCostCompany)
    },
    projectCostDesignFull: function () {
      return this.projectCostServiceFull(this.projectCostDesign, this.projectCostDesignCompanyPercent)
    },
    projectCostDesignManager: function () {
      return this.projectCostServiceManager(+this.projectCostDesignFull, this.projectCostManager)
    },
    projectCostDesignManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostDesignManager, this.projectCostSocPercent)
    },
    projectCostDesignManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostDesignManager, this.projectCostDesignManagerSoc)
    },
    projectCostDesignCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostDesignFull, this.projectCostDesignPay, this.projectCostDesignManagerFull)
    },
    projectCostDesignCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostDesignCompanyGet, this.projectCostClp)
    },
    projectCostDesignCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostDesignFull, this.projectCostTax)
    },
    projectCostDesignCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostDesignCompanyGet, this.projectCostDesignCompanyClp, this.projectCostDesignCompanyTax)
    },
    // Front
    projectCostFrontSoc: function () {
      return this.projectCostServiceSoc(this.projectCostFront, this.projectCostSocPercent)
    },
    projectCostFrontPay: function () {
      return this.projectCostServicePay(this.projectCostFront, this.projectCostFrontSoc)
    },
    projectCostFrontCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostFront, this.projectCostCompany)
    },
    projectCostFrontFull: function () {
      return this.projectCostServiceFull(this.projectCostFront, this.projectCostFrontCompanyPercent)
    },
    projectCostFrontManager: function () {
      return this.projectCostServiceManager(+this.projectCostFrontFull, this.projectCostManager)
    },
    projectCostFrontManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostFrontManager, this.projectCostSocPercent)
    },
    projectCostFrontManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostFrontManager, this.projectCostFrontManagerSoc)
    },
    projectCostFrontCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostFrontFull, this.projectCostFrontPay, this.projectCostFrontManagerFull)
    },
    projectCostFrontCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostFrontCompanyGet, this.projectCostClp)
    },
    projectCostFrontCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostFrontFull, this.projectCostTax)
    },
    projectCostFrontCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostFrontCompanyGet, this.projectCostFrontCompanyClp, this.projectCostFrontCompanyTax)
    },
    // Backend
    projectCostBackSoc: function () {
      return this.projectCostServiceSoc(this.projectCostBack, this.projectCostSocPercent)
    },
    projectCostBackPay: function () {
      return this.projectCostServicePay(this.projectCostBack, this.projectCostBackSoc)
    },
    projectCostBackCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostBack, this.projectCostCompany)
    },
    projectCostBackFull: function () {
      return this.projectCostServiceFull(this.projectCostBack, this.projectCostBackCompanyPercent)
    },
    projectCostBackManager: function () {
      return this.projectCostServiceManager(+this.projectCostBackFull, this.projectCostManager)
    },
    projectCostBackManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostBackManager, this.projectCostSocPercent)
    },
    projectCostBackManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostBackManager, this.projectCostBackManagerSoc)
    },
    projectCostBackCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostBackFull, this.projectCostBackPay, this.projectCostBackManagerFull)
    },
    projectCostBackCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostBackCompanyGet, this.projectCostClp)
    },
    projectCostBackCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostBackFull, this.projectCostTax)
    },
    projectCostBackCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostBackCompanyGet, this.projectCostBackCompanyClp, this.projectCostBackCompanyTax)
    },
    // Google
    projectCostGoogleSoc: function () {
      return this.projectCostServiceSoc(this.projectCostGoogle, this.projectCostSocPercent)
    },
    projectCostGooglePay: function () {
      return this.projectCostServicePay(this.projectCostGoogle, this.projectCostGoogleSoc)
    },
    projectCostGoogleCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostGoogle, this.projectCostCompany)
    },
    projectCostGoogleFull: function () {
      return this.projectCostServiceFull(this.projectCostGoogle, this.projectCostGoogleCompanyPercent)
    },
    projectCostGoogleManager: function () {
      return this.projectCostServiceManager(+this.projectCostGoogleFull, this.projectCostManager)
    },
    projectCostGoogleManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostGoogleManager, this.projectCostSocPercent)
    },
    projectCostGoogleManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostGoogleManager, this.projectCostGoogleManagerSoc)
    },
    projectCostGoogleCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostGoogleFull, this.projectCostGooglePay, this.projectCostGoogleManagerFull)
    },
    projectCostGoogleCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostGoogleCompanyGet, this.projectCostClp)
    },
    projectCostGoogleCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostGoogleFull, this.projectCostTax)
    },
    projectCostGoogleCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostGoogleCompanyGet, this.projectCostGoogleCompanyClp, this.projectCostGoogleCompanyTax)
    },
    // Yandex
    projectCostYandexSoc: function () {
      return this.projectCostServiceSoc(this.projectCostYandex, this.projectCostSocPercent)
    },
    projectCostYandexPay: function () {
      return this.projectCostServicePay(this.projectCostYandex, this.projectCostYandexSoc)
    },
    projectCostYandexCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostYandex, this.projectCostCompany)
    },
    projectCostYandexFull: function () {
      return this.projectCostServiceFull(this.projectCostYandex, this.projectCostYandexCompanyPercent)
    },
    projectCostYandexManager: function () {
      return this.projectCostServiceManager(+this.projectCostYandexFull, this.projectCostManager)
    },
    projectCostYandexManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostYandexManager, this.projectCostSocPercent)
    },
    projectCostYandexManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostYandexManager, this.projectCostYandexManagerSoc)
    },
    projectCostYandexCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostYandexFull, this.projectCostYandexPay, this.projectCostYandexManagerFull)
    },
    projectCostYandexCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostYandexCompanyGet, this.projectCostClp)
    },
    projectCostYandexCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostYandexFull, this.projectCostTax)
    },
    projectCostYandexCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostYandexCompanyGet, this.projectCostYandexCompanyClp, this.projectCostYandexCompanyTax)
    },
    // SEO
    projectCostSEOSoc: function () {
      return this.projectCostServiceSoc(this.projectCostSEO, this.projectCostSocPercent)
    },
    projectCostSEOPay: function () {
      return this.projectCostServicePay(this.projectCostSEO, this.projectCostSEOSoc)
    },
    projectCostSEOCompanyPercent: function () {
      return this.projectCostServiceCompanyPercent(this.projectCostSEO, this.projectCostCompany)
    },
    projectCostSEOFull: function () {
      return this.projectCostServiceFull(this.projectCostSEO, this.projectCostSEOCompanyPercent)
    },
    projectCostSEOManager: function () {
      return this.projectCostServiceManager(+this.projectCostSEOFull, this.projectCostManager)
    },
    projectCostSEOManagerSoc: function () {
      return this.projectCostServiceSocManagerSoc(this.projectCostSEOManager, this.projectCostSocPercent)
    },
    projectCostSEOManagerFull: function () {
      return this.projectCostServiceSocManagerFull(this.projectCostSEOManager, this.projectCostSEOManagerSoc)
    },
    projectCostSEOCompanyGet: function () {
      return this.projectCostServiceCompanyGet(this.projectCostSEOFull, this.projectCostSEOPay, this.projectCostSEOManagerFull)
    },
    projectCostSEOCompanyClp: function () {
      return this.projectCostServiceCompanyClp(this.projectCostSEOCompanyGet, this.projectCostClp)
    },
    projectCostSEOCompanyTax: function () {
      return this.projectCostServiceCompanyTax(this.projectCostSEOFull, this.projectCostTax)
    },
    projectCostSEOCompanyClean: function () {
      return this.projectCostServiceCompanyClean(this.projectCostSEOCompanyGet, this.projectCostSEOCompanyClp, this.projectCostSEOCompanyTax)
    },
    // Result
    projectResultWorkersPay: function () {
      return (Math.round((
        (+this.projectCostPrototype)
        + (+this.projectCostDesign)
        + (+this.projectCostFront)
        + (+this.projectCostBack)
        + (+this.projectCostGoogle)
        + (+this.projectCostYandex)
        + (+this.projectCostSEO)
      ) * 100) / 100)
    },
    projectResultWorkersPaySoc: function () {
      return (Math.round((
        (+this.projectCostPrototypeSoc)
        + (+this.projectCostDesignSoc)
        + (+this.projectCostFrontSoc)
        + (+this.projectCostBackSoc)
        + (+this.projectCostGoogleSoc)
        + (+this.projectCostYandexSoc)
        + (+this.projectCostSEOSoc)
      ) * 100) / 100)
    },
    projectResultWorkersPayFull: function () {
      return (Math.round((
        (+this.projectCostPrototypePay)
        + (+this.projectCostDesignPay)
        + (+this.projectCostFrontPay)
        + (+this.projectCostBackPay)
        + (+this.projectCostGooglePay)
        + (+this.projectCostYandexPay)
        + (+this.projectCostSEOPay)
      ) * 100) / 100)
    },
    projectResultCompanyPercent: function () {
      return (Math.round((
        (+this.projectCostPrototypeCompanyPercent)
        + (+this.projectCostDesignCompanyPercent)
        + (+this.projectCostFrontCompanyPercent)
        + (+this.projectCostBackCompanyPercent)
        + (+this.projectCostGoogleCompanyPercent)
        + (+this.projectCostYandexCompanyPercent)
        + (+this.projectCostSEOCompanyPercent)
      ) * 100) / 100)
    },
    projectResultClientPay: function () {
      return (Math.round((
        (+this.projectCostPrototypeFull)
        + (+this.projectCostDesignFull)
        + (+this.projectCostFrontFull)
        + (+this.projectCostBackFull)
        + (+this.projectCostGoogleFull)
        + (+this.projectCostYandexFull)
        + (+this.projectCostSEOFull)
      ) * 100) / 100)
    },
    projectResultManager: function () {
      return (Math.round((
        (+this.projectCostPrototypeManager)
        + (+this.projectCostDesignManager)
        + (+this.projectCostFrontManager)
        + (+this.projectCostBackManager)
        + (+this.projectCostGoogleManager)
        + (+this.projectCostYandexManager)
        + (+this.projectCostSEOManager)
      ) * 100) / 100)
    },
    projectResultManagerSoc: function () {
      return (Math.round((
        (+this.projectCostPrototypeManagerSoc)
        + (+this.projectCostDesignManagerSoc)
        + (+this.projectCostFrontManagerSoc)
        + (+this.projectCostBackManagerSoc)
        + (+this.projectCostGoogleManagerSoc)
        + (+this.projectCostYandexManagerSoc)
        + (+this.projectCostSEOManagerSoc)
      ) * 100) / 100)
    },
    projectResultManagerFull: function () {
      return (Math.round((
        (+this.projectCostPrototypeManagerFull)
        + (+this.projectCostDesignManagerFull)
        + (+this.projectCostFrontManagerFull)
        + (+this.projectCostBackManagerFull)
        + (+this.projectCostGoogleManagerFull)
        + (+this.projectCostYandexManagerFull)
        + (+this.projectCostSEOManagerFull)
      ) * 100) / 100)
    },
    projectResultCompanyGet: function () {
      return (Math.round((
        (+this.projectCostPrototypeCompanyGet)
        + (+this.projectCostDesignCompanyGet)
        + (+this.projectCostFrontCompanyGet)
        + (+this.projectCostBackCompanyGet)
        + (+this.projectCostGoogleCompanyGet)
        + (+this.projectCostYandexCompanyGet)
        + (+this.projectCostSEOCompanyGet)
      ) * 100) / 100)
    },
    projectResultCompanyClp: function () {
      return (Math.round((
        (+this.projectCostPrototypeCompanyClp)
        + (+this.projectCostDesignCompanyClp)
        + (+this.projectCostFrontCompanyClp)
        + (+this.projectCostBackCompanyClp)
        + (+this.projectCostGoogleCompanyClp)
        + (+this.projectCostYandexCompanyClp)
        + (+this.projectCostSEOCompanyClp)
      ) * 100) / 100)
    },
    projectResultCompanyTax: function () {
      return (Math.round((
        (+this.projectCostPrototypeCompanyTax)
        + (+this.projectCostDesignCompanyTax)
        + (+this.projectCostFrontCompanyTax)
        + (+this.projectCostBackCompanyTax)
        + (+this.projectCostGoogleCompanyTax)
        + (+this.projectCostYandexCompanyTax)
        + (+this.projectCostSEOCompanyTax)
      ) * 100) / 100)
    },
    projectResultCompanyClean: function () {
      return (Math.round((
        (+this.projectCostPrototypeCompanyClean)
        + (+this.projectCostDesignCompanyClean)
        + (+this.projectCostFrontCompanyClean)
        + (+this.projectCostBackCompanyClean)
        + (+this.projectCostGoogleCompanyClean)
        + (+this.projectCostYandexCompanyClean)
        + (+this.projectCostSEOCompanyClean)
      ) * 100) / 100)
    }
  },
  created: function () {
    if (!localStorage.getItem('auth')) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  h2 {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  form {
    display: block;
    margin: 0 auto 20px;
    max-width: 900px;
    text-align: left;
  }

  label {
    display: inline-block;
    vertical-align: bottom;
    margin: 0 0 20px;
    width: 435px;
    text-align: left;
  }

  label:first-of-type {
    margin: 0 0 20px;
    width: 100%;
  }

  label:nth-of-type(even) {
    margin-right: 25px;
  }

  label span {
    display: block;
    font-size: 18px;
    font-weight: 700;
  }

  label input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 13px 30px;
    font-size: 18px;
    border: 1px solid #2c3e50;
    transition: .25s;
  }

  label input:hover,
  label input:focus {
    border-color: #42b983;
  }

  .btn {
    display: inline-block;
    vertical-align: middle;
    margin: 25px 0 50px;
    padding: 13px 30px;
    box-sizing: border-box;
    font-size: 18px;
    letter-spacing: 1.5px;
    color: #2c3e50;
    background-color: #42b983;
    text-decoration: none;
    cursor: pointer;
    border: 0;
    transition: .25s;
  }

  .btn:hover,
  .btn:focus {
    color: #fff;
    background-color: #2c3e50;
  }

  table {
    margin: 0 auto 0;
    width: 1150px;
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid #2c3e50;
    border-collapse: collapse;
  }

  table th {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    line-height: 1.6;
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #2c3e50;
  }

  table td {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #2c3e50;
  }

  table tbody tr:nth-of-type(odd) {
    background-color: rgba(44, 62, 80, 0.07);
  }

  table tbody tr:hover {
    background-color: rgba(66, 185, 131, 0.2);
  }

  table tbody td:nth-of-type(odd) {
    background-color: rgba(44, 62, 80, 0.07);
  }

  table tfoot td {
    text-align: right;
  }

  @media print {
    h1,
    form,
    .btn {
      display: none;
    }

    table {
      width: 100%;
      font-size: 11px !important;
      font-weight: 700 !important;
    }
  }

</style>

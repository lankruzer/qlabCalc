<template>
  <div class="JsonCalculate">

    <h1>Для расчёта стоимости проекта заполните поля ниже</h1>

    <form action="#" method="post">
      <div>
        <h3>Название проекта</h3>
        <label>
          <input type="text" placeholder="Название проекта" v-model="projectCostName">
        </label>
      </div>
      <div>
        <h3>Стоимость услуг</h3>
        <label v-for="service in services">
          <span>{{ service.label + ':' }}</span>
          <input type="number" v-model="service.value" min="0" placeholder="0">
        </label>
      </div>
      <div>
        <h3>Проценты</h3>
        <label v-for="percent in percentages">
          <span>{{ percent.label + ':' }}</span>
          <input type="number" v-model="percent.value" min="0">
        </label>
      </div>
    </form>

    <div class="resultTable" v-if="getSum('value') > 0">
      <h2>Стоимость проекта <span v-if="projectCostName > ''">{{ ' "' + projectCostName + '"' }}</span></h2>
      <table>
        <thead>
          <tr>
            <th rowspan="3">Название услуги</th>
            <th colspan="3">Исполнитель</th>
            <th colspan="9">Компания</th>
          </tr>
          <tr>
            <th rowspan="2">ЗП</th>
            <th rowspan="2">Соц. {{ percentages.field1.value }}%</th>
            <th rowspan="2">Полная</th>
            <th colspan="2">Надбавка</th>
            <th colspan="3">Менеджеру</th>
            <th colspan="5">Прибыль</th>
          </tr>
          <tr>
            <th>{{ percentages.field2.value }}%</th>
            <th>К оплате</th>
            <th>ЗП {{ percentages.field3.value }}%</th>
            <th>Соц {{ percentages.field1.value }}%</th>
            <th>Полная</th>
            <th>Получено</th>
            <th>КЛП {{ percentages.field4.value }}%</th>
            <th>Налог {{ percentages.field5.value }}%</th>
            <th>Чистая</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="service in services" v-if="service.value > 0">
            <!--<td v-show="false">{{ result.value = 0 }}</td>-->
            <td>{{ service.label }}</td>
            <td>{{ service.value }}</td>
            <td>{{ service.soc = Math.round(getPercent(service.value, percentages.field1.value) * 100) / 100 }}</td>
            <td>{{ service.full = Math.round(((+service.value) + (+service.soc)) * 100) / 100 }}</td>
            <td>{{ service.companyPercent = Math.round(getPercent(service.value, percentages.field2.value) * 100) / 100 }}</td>
            <td>{{ service.companyPercentFull = Math.round(((+service.value) + (+service.companyPercent)) * 100) / 100 }}</td>
            <td>{{ service.managerPercent = Math.round(getPercent(service.companyPercentFull, percentages.field3.value) * 100) / 100 }}</td>
            <td>{{ service.managerPercentSoc = Math.round(getPercent(service.managerPercent, percentages.field1.value) * 100) / 100 }}</td>
            <td>{{ service.managerPercentFull = Math.round(((+service.managerPercent) + (+service.managerPercentSoc)) * 100) / 100 }}</td>
            <td>{{ service.companyGet = Math.round(((+service.companyPercentFull) - (+service.full) - (+service.managerPercentFull)) * 100) / 100 }}</td>
            <td>{{ service.companyGetClp = Math.round(getPercent(service.companyGet, percentages.field4.value) * 100) / 100 }}</td>
            <td>{{ service.companyGetTax = Math.round(getPercent(service.companyPercentFull, percentages.field5.value) * 100) / 100 }}</td>
            <td>{{ service.companyGetClean = Math.round(((+service.companyGet) - (+service.companyGetClp) - (+service.companyGetTax)) * 100) / 100 }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Итого</td>
            <td>{{ getSum('value') }}</td>
            <td>{{ getSum('soc') }}</td>
            <td>{{ getSum('full') }}</td>
            <td>{{ getSum('companyPercent') }}</td>
            <td>{{ getSum('companyPercentFull') }}</td>
            <td>{{ getSum('managerPercent') }}</td>
            <td>{{ getSum('managerPercentSoc') }}</td>
            <td>{{ getSum('managerPercentFull') }}</td>
            <td>{{ getSum('companyGet') }}</td>
            <td>{{ getSum('companyGetClp') }}</td>
            <td>{{ getSum('companyGetTax') }}</td>
            <td>{{ getSum('companyGetClean') }}</td>
          </tr>
        </tfoot>
      </table>

      <div class="workers" v-if="getSum('value') > 0">
        <div>
          <h2>Исполнители</h2>
          <label v-for="service in services" v-if="(service.value !== undefined) && (service.value > 0)">
            <span>{{ service.label + ':' }}</span>
            <input type="text" placeholder="Иванов И.И.">
          </label>
          <label>
            <span>Менеджер: </span>
            <input type="text" placeholder="Иванов И.И.">
          </label>
          <label class="label-date">
            <span>Дата: {{ (((new Date()).getDate() > 10) ? (new Date()).getDate()  : '0' + (new Date()).getDate()) + '.' + ((((new Date()).getMonth() + 1) > 10) ? ((new Date()).getMonth() + 1) : '0' + ((new Date()).getMonth() + 1)) + '.' + (new Date()).getFullYear() }}</span>
          </label>

        </div>
      </div>

      <button class="btn" onclick="window.print()" type="button">Распечатать</button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'json-calculate',
  data () {
    return {
      projectCostName: '',
      result: {
        value: 0,
        soc: 0,
        full: 0,
        companyPercent: 0,
        companyPercentFull: 0,
        managerPercent: 0,
        managerPercentSoc: 0,
        managerPercentFull: 0,
        companyGet: 0,
        companyGetClp: 0,
        companyGetTax: 0,
        companyGetClean: 0
      },
      services: {
        field1: {
          label: 'Прототип'
        },
        field2: {
          label: 'Дизайн'
        },
        field3: {
          label: 'Вёрстка'
        },
        field4: {
          label: 'Бэкенд'
        },
        field5: {
          label: 'Контекст Google'
        },
        field6: {
          label: 'Контекст Yandex'
        },
        field7: {
          label: 'СЕО'
        }
      },
      percentages: {
        field1: {
          label: 'Социальный взнос в % от ЗП сотрудника',
          value: 5
        },
        field2: {
          label: 'Надбавка компании в % от стоимости работы',
          value: 100
        },
        field3: {
          label: 'Оплата менеджеру в % от стоимости проекта',
          value: 10
        },
        field4: {
          label: 'КЛП в % от полученной прибыли',
          value: 11
        },
        field5: {
          label: 'Налог в % от стоимости проекта',
          value: 16
        }
      }
    }
  },
  methods: {
    getPercent: function (number, percent) {
      return ((+number) / 100) * (+percent)
    },
    getSum: function (key) {
      let sum = 0;
      for (let service in this.services) {
        if ((this.services[service][key]) !== undefined) {
          sum += +this.services[service][key]
        }
      }
      return Math.round(sum * 100) / 100
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
  h1 {
    margin-bottom: 80px;
  }

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

  form h3 {
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  label {
    display: inline-block;
    vertical-align: bottom;
    margin: 0 0 20px;
    width: 435px;
    text-align: left;
  }

  form div {
    margin-bottom: 40px;
  }

  form div:first-of-type label:first-of-type {
    margin: 0 0 20px;
    width: 100%;
  }

  label:nth-of-type(odd) {
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
    margin: 0 auto 60px;
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

  .workers {
    margin: 0 auto 60px;
    width: 1150px;
    text-align: left;
  }

  .workers h2 {
    width: 100%;
    text-align: center;
  }

  .workers label {
    display: block;
    width: 100%;
  }

  .workers label span {
    display: inline-block;
    vertical-align: bottom;
  }

  .workers label input {
    display: inline-block;
    padding: 0;
    width: 300px;
    font-size: 18px;
    font-weight: 700;
    border: 0;
    color: #2c3e50;
    border-bottom: 1px solid;
  }

  .label-date {
    margin-top: 40px;
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

    .workers label input {
      border-bottom: 0;
    }
  }
</style>

<template>
  <div>
    <div v-if="this.$route.name !== 'Price'">
      <div class="priceWrapper" @click="closePrice">
        <div class="price">
          <button class="btnPriceToggle" @click="togglePrice()">Прайс</button>
          <table class="priceTable">
            <thead>
              <tr>
                <th>Название услуги</th>
                <th>Стоимость работы ОТ</th>
                <th>Надбавка компании</th>
                <th>Полная стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="price in prices">
                <td>{{ price.label }}</td>
                <td>{{ price.costWorker }}</td>
                <td>{{ price.costCompany }}</td>
                <td>{{ price.costFull = (+price.costWorker) + (+price.costCompany) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else class="pagePrice">
      <table class="priceTable">
        <thead>
        <tr>
          <th>Название услуги</th>
          <th>Стоимость работы ОТ</th>
          <th>Надбавка компании</th>
          <th>Полная стоимость</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="price in prices">
          <td>{{ price.label }}</td>
          <td>{{ price.costWorker }}</td>
          <td>{{ price.costCompany }}</td>
          <td>{{ price.costFull = (+price.costWorker) + (+price.costCompany) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'price',
  data () {
    return {
      prices: {
        price1: {
          label: 'Прототип',
          costWorker: '100',
          costCompany: '100'
        },
        price2: {
          label: 'Дизайн логотипа',
          costWorker: '100',
          costCompany: '100'
        }
      }
    }
  },
  methods: {
    togglePrice: function () {
      document.querySelector('.price').classList.toggle('active')
      document.querySelector('.priceWrapper').classList.toggle('active')
    },
    closePrice: function (event) {
      if (event.target.classList.contains('priceWrapper', 'active')) {
        document.querySelector('.price').classList.toggle('active')
        document.querySelector('.priceWrapper').classList.toggle('active')
      }
    }
  },
  mounted: function () {
    if (document.querySelector('.priceTable')) {
      document.querySelector('.priceTable').classList.add('hide')
    }
  }
}
</script>

<style scoped>
  .priceWrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: rgba(44, 62, 80, 0.11);
    transition: .25s;
    transition-delay: .25s;
  }

  .priceWrapper.active {
    right: 0;
    width: 100%;
  }

  .price {
    position: fixed;
    top: 0;
    right: 100%;
    box-sizing: border-box;
    padding: 50px 25px;
    height: 100%;
    width: 75%;
    transition: .25s;
    overflow: visible;
    background-color: #fff;
    border-right: 2px solid #2c3e50;
  }

  .price.active {
    right: 25%;
  }

  .btnPriceToggle {
    position: absolute;
    top: 50%;
    right: 0;
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
    transform: translate(70%, -100%) rotate(90deg);
    transform-origin: center;
  }

  .btnPriceToggle:hover,
  .btnPriceToggle:focus {
    color: #fff;
    background-color: #2c3e50;
  }

  table {
    margin: 0 auto 60px;
    width: 100%;
    box-sizing: border-box;
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

  .pagePrice {
    display: block;
    margin: 60px auto 60px;
    width: 1150px;
  }

  .hide {
    display: none;
  }

  @media print {
    .priceWrapper,
    .priceWrapper * {
      display: none;
    }
  }

</style>


//her ser du en kode for grafen jeg har på nettsiden. den er bygd opp av y og x akser values og localstorage
ap_vote = localStorage.getItem("ap_vote")
h_vote = localStorage.getItem("h_votes")
mdg_vote = localStorage.getItem("mdg_votes")

var xValues = ["AP", "MDG", "Høyre",];
var yValues = [ap_vote, mdg_vote, h_vote,];
var barColors = ["red", "green", "blue",];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
        }
      }]
    },
    legend: { display: false },
    title: {
      display: true,
      text: ""
    }
  }
});

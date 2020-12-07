// https://www.chartjs.org/docs/latest/
const ctx = document.getElementById("myChart").getContext("2d");

let myChart = new Chart(ctx, {
    // type: "pie",
    // type: "bar",
    type: 'polarArea',
    // type: "doughnut",
    // type: "line",

    data: {
        labels: ['Python', "JavaScript", "PHP", "HTML", "CSS"],
        datasets: [
            {
                label: "Programming Language 1ST YEAR",
                data: [13, 15, 8, 5, 6], // VALUE FOR PYTHON, JS, PHP, HTML, CSS,
                backgroundColor: ['red', 'green', 'blue', 'orange', 'teal'],
                // borderColor: ["black", 'gray', 'pink', 'purple', 'maganta'],
                // borderWidth: 3
            },
            {
                label: "Programming Language 2ND YEAR",
                data: [12, 9, 7, 15, 2] // MULTIPLE DATA VALUE
            }
        ]
    },
    options: {
        responsive: false,
        layout: { // PADDING FOR CHART
            padding: {
                left: 50,
                right: 0,
                top: 50,
                bottom: 0
            }
        },
        tooltips: {
            enabled: true,
            backgroundColor: "green",
            titleFontFamily: "Comic Sans MS",
            titleFontSize: 30,
            titleFontStyle: "blod italic",
            titleFontColor: "yellow",
            titleAlign: "center",
            titleSpacing: 3,
            titleMarginBottom: 50,
            bodyFontFamily: "Comic Sans MS",
            bodyFontSize: 20,
            bodyFontStyle: "italic",
            bodyFontColor: "black",
            bodyAlign: "center",
            bodySpacing: 3
        },
        title: {
            display: true,
            text: "Custom Chart Title",
            fontSize: 25,
            position: "bottom",
            fontColor: "yellow",
            fontFamily: "Comic Sans MS",
            padding: 20,
            lineHeight: 5,
            fontStyle: "blod italic"
        },
        legend: {
            display: true,
            position: "bottom",
            align: "end",
            labels: {
                fontSize: 16,
                fontColor: "red",
                boxWidth: 20,

            }
        },
        // animation: {
        //     duration: 5000,
        //     easing: "easeInOutBounce"
        // },
        events: ["click"],   // TOOLTIP CLICK 
        onClick: function (){   // CLICK ANYWARE
            console.log("On click event");
        },
        // onHover: function (){   // CLICK ANYWARE
        //     console.log("On click event");
        // },
    }
});
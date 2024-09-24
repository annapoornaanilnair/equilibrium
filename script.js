// Sample data for anxiety trends in the past week
let anxietyData = {
    'September 2024': [ 5, 6, 4, 7, 8, 5, 6 ],
    'August 2024': [ 1, 5, 8, 6, 7, 4, 5 ],
    'July 2024': [ 2, 5, 3, 6, 5, 4, 5 ],
    // Add more months and data as needed
};

let currentMonth = 'September 2024';

// Initialize Chart
let ctx = document.getElementById( 'anxietyChart' ).getContext( '2d' );
let chart = new Chart( ctx, {
    type: 'line',
    data: {
        labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
        datasets: [ {
            label: 'Anxiety Level',
            data: anxietyData[ currentMonth ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        } ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    }
} );

// Update chart data
function updateChart ( month )
{
    chart.data.datasets[ 0 ].data = anxietyData[ month ];
    chart.update();
    document.getElementById( 'currentMonth' ).textContent = month;
}

// Navigation buttons
document.getElementById( 'prevMonth' ).addEventListener( 'click', function ()
{
    currentMonth = currentMonth === 'September 2024' ? 'August 2024' : 'September 2024';
    updateChart( currentMonth );
} );

document.getElementById( 'nextMonth' ).addEventListener( 'click', function ()
{
    currentMonth = currentMonth === 'August 2024' ? 'September 2024' : 'August 2024';
    updateChart( currentMonth );
} );

// Download Report Button
document.getElementById( 'downloadReport' ).addEventListener( 'click', function ()
{
    let link = document.createElement( 'a' );
    link.href = document.getElementById( 'anxietyChart' ).toDataURL( 'image/png' );
    link.download = 'anxiety_report.png';
    link.click();
} );

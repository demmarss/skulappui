import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Bar} from 'react-chartjs-2';

class ProgressChart extends Component {

    render(){
                
        const { labelTopic, scoreArray, xlableArray, yAxisMax  } = this.props

        const data = {
            labels: xlableArray,
            datasets: [
              {
                label: labelTopic,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                data: scoreArray
              }
            ]
          };

          const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: yAxisMax
                    }
                }]
            }
        }

        return (           
                <div>  
                    <Bar
                        data={data}
                        options = {options}
                    />
                    {/* <Link to ={'/task/'+taskSingle._id} > Click to see detail</Link> */}
                </div>
        )
    }
}
function mapStateToProps({authedUser}){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(ProgressChart)




                     
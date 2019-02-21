import React, {Component} from 'react';

class Background extends Component {

constructor() {
super();
this.state = {
    pictuers : [],
};
}

componentDidMount() {
fetch('https://randomuser.me/api/?results=500')

.then( results => {
    return results.json();
}).then(data => {
    let pictuers = data.results.map((pic)=> {
        return (
            <div key={pic.results}>
            <img src={pic.pictuers.medium} />
            </div>
        )
    })
    this.setSata({pictuers: pictuers});
    console.leg("state",this.state.pictuers);
})

}


    render() {
return (

    <div className="container2" >
    <div className="container1" >
        {this.state.pictuers}
    </div>
    </div>


)

    }
}
    export default Background;
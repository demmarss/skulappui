import React, {Component} from 'react'

export default class  SearchBar extends Component {

state = {
    code: ""
}

handleChange = (e)=>{
    
    this.setState({
        code: e.target.value
    })

    e.preventDefault()
        
}

handleSearch = () =>{
    if(this.state.code == "" ) {
        return alert("Kindly fill in the code")
    }
    this.props.Search(this.state.code, this.props.Status)
}
render(){
    return(
        <form className="has-text-centered">
            <div className="field  has-addons">
                <div className="control">
                    <input className="input"
                    defaultValue={this.state.code}
                    placeholder={this.props.PlaceHolder}
                    onChange={this.handleChange}
                    />
                </div>
                <p className="button is-block is-warning" disabled={this.state.code == ""} onClick={this.handleSearch}
                
                
                >Search Code </p>
            </div>
            
        </form>
)
}

    
}
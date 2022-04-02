import React from 'react'

export default class SafeComponent extends Ract.Component{
    constructor(props){
        supor(props)
        this.state = { hasError: true};
    }
    static getDerivedStateFromError(error){
        return { hasError: true }
    }
    componentDidCatch(){

    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong.</h1>
        }
        return this.props.children
    }
}
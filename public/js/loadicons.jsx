//The icons are seperated into different components since they need different delay.

class LoadHTML extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 500)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/HTML5.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadCSS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 1000)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/CSS3.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadJS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 1500)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/Javascript.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadPHP extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 2000)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/PHP.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadLaravel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 2500)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/laravel.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadReact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 3000)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/React.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadVue extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 3500)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/Vue.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadBS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 4000)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/Bootstrap.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadD3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 4500)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/d3.svg" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

class LoadWOW extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 5000)
      }
    render(){
        let renderContainer = false //By default don't render anything
        if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <img src="/logo/wow.png" width="64px" height="64px" class="wow bounceInRight"></img>; //Add dom elements
        }
        return (
          renderContainer //Render the dom elements, or, when this.state == false, nothing.
        ) 
    }
}

//Render all icons
ReactDOM.render(<LoadHTML />, document.getElementById('htmlicon'));
ReactDOM.render(<LoadCSS />, document.getElementById('cssicon'));
ReactDOM.render(<LoadJS />, document.getElementById('jsicon'));
ReactDOM.render(<LoadPHP />, document.getElementById('phpicon'));
ReactDOM.render(<LoadLaravel />, document.getElementById('laravelicon'));
ReactDOM.render(<LoadReact />, document.getElementById('reacticon'));
ReactDOM.render(<LoadVue />, document.getElementById('vueicon'));
ReactDOM.render(<LoadBS />, document.getElementById('bsicon'));
ReactDOM.render(<LoadD3 />, document.getElementById('d3icon'));
ReactDOM.render(<LoadWOW />, document.getElementById('wowicon'));

//Add zoomable classes to each icons after render
var d = document.getElementById("htmlicon");
d.className += " zoomable";
d = document.getElementById("cssicon");
d.className += " zoomable";
d = document.getElementById("jsicon");
d.className += " zoomable";
d = document.getElementById("phpicon");
d.className += " zoomable";
d = document.getElementById("laravelicon");
d.className += " zoomable";
d = document.getElementById("reacticon");
d.className += " zoomable";
d = document.getElementById("vueicon");
d.className += " zoomable";
d = document.getElementById("bsicon");
d.className += " zoomable";
d = document.getElementById("d3icon");
d.className += " zoomable";
d = document.getElementById("wowicon");
d.className += " zoomable";
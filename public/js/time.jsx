class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {time: calculateTime(), day: calculateDay()};
    }
  render() {
    return <div class="container-fluid align-items-center mx-auto">
      <h1 class="clock text-muted">{this.state.day}</h1>
      <h1 class="clocktime">{this.state.time}</h1>
    </div>;
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: calculateTime() , day: calculateDay()}), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

function calculateTime(){
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':'+ date.getSeconds() + " " + ampm;
    return strTime;

}

function calculateDay(){
  var d = new Date();
  var day = d.getDay();

  switch(day){
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
  }
}

ReactDOM.render(<Time />, document.getElementById('timediv'));
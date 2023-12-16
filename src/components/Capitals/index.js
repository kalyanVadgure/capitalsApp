import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChangeCapital = event => {
    const selectedCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    this.setState({country: selectedCountry[0].country})
  }

  render() {
    const {country} = this.state
    const Option = props => {
      const {countryDetails} = props
      const {capitalDisplayText, id} = countryDetails
      return <option value={id}>{capitalDisplayText}</option>
    }

    return (
      <div className="main_container">
        <div className="capital_country_container">
          <h1>Countries And Capitals</h1>
          <div className="select_container">
            <select onChange={this.onChangeCapital} className="select_options">
              {countryAndCapitalsList.map(eachCountry => (
                <Option
                  countryDetails={eachCountry}
                  key={eachCountry.id}
                  value={country.id}
                />
              ))}
            </select>
            <p className="is_capital_para">is capital of which country</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

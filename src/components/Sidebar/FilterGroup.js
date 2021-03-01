import React from 'react'
import MultipleSelect from '../../Dropdown/MultipleSelect'
import SingleSelect from '../../Dropdown/SingleSelect'

const FilterGroup = () => { 
    return (
          <div>
            <div className="padding-top--medium padding-bottom--medium  padding-left--35px padding-right--35px grey_border_top grey_border_bottom">
              <div className="margin-bottom--medium">
                <SingleSelect
                //   filterOptions={this.props.filterOptions.currency}
                //   currentValue={this.props.scope.currency}
                //   selectfunction={this.props.handleCurrencyChange}
                  dropDownName={"Currency (?)"}
                  valueName={"currency"}
                  idName={"currency"}
                  backgroundColor={"#2b2a28"}
                  backgroundLabelColor={"#2b2a28"}
                  textColor={"white"}
                  bordersize={"1px"}
                />
              </div>
    
              <div>
                <SingleSelect
                  filterOptions={[
                    { value: "Function" },
                    { value: "Line" },
                    { value: "Ascending Price" },
                    { value: "Descending Price" },
                  ]}
                //   currentValue={this.props.scope.sortorder}
                //   selectfunction={this.props.handleSortChange}
                  dropDownName={"Order By"}
                  valueName={"value"}
                  idName={"value"}
                  backgroundColor={"#2b2a28"}
                  textColor={"white"}
                  backgroundLabelColor={"#2b2a28"}
                  bordersize={"1px"}
                />
              </div>
            </div>
    
            <div className="padding-top--medium padding-bottom--medium  padding-left--35px padding-right--35px">
              <div className="margin-bottom--medium">
                <MultipleSelect
                //   filterOptions={this.props.filterOptions.line}
                //   currentValue={this.props.filters.line}
                //   selectfunction={this.props.handleLineFilter}
                  dropDownName={"Line (?)"}
                  valueName={"line"}
                  backgroundColor={"#2b2a28"}
                  textColor={"white"}
                  backgroundLabelColor={"#2b2a28"}
                //   newLine={this.props.newLine}
                />
              </div>
    
         
            <div className="margin-bottom--medium">
                <MultipleSelect
                    // filterOptions={this.props.filterOptions.Channel}
                    // currentValue={this.props.filters.Channel}
                    // selectfunction={this.props.handleChannelFilter}
                    dropDownName={"Channel (?)"}
                    valueName={"Channel"}
                    backgroundColor={"#2b2a28"}
                    textColor={"white"}
                    backgroundLabelColor={"#2b2a28"}
                />
            </div>
            <div className="margin-bottom--medium">
                <MultipleSelect
                    // filterOptions={this.props.filterOptions["Go/NoGo"]}
                    // currentValue={this.props.filters["Go/NoGo"]}
                    // selectfunction={this.props.handleGoNoGoFilter}
                    dropDownName={"Go/NoGo Status (?)"}
                    valueName={"Status"}
                    backgroundColor={"#2b2a28"}
                    textColor={"white"}
                    backgroundLabelColor={"#2b2a28"}
                />
            </div>
           </div>
        </div>
    )
}

export default FilterGroup
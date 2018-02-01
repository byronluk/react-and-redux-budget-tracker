import React from 'react';

function calculateSum(lineItems) {
  return lineItems.reduce((acc, lineItem) => acc + lineItem.amount, 0);
}

function formatCurrency(amount) {
  const absoluteAmount = Math.abs(amount);
  const positive = amount >= 0;
  if (positive) {
    return `$${amount.toFixed(2)}`;
  }
  return positive ? `+$${absoluteAmount.toFixed(2)}` : `-$${absoluteAmount.toFixed(2)}`;
}

export default class Summary extends React.Component {
  render() {
    const { incomeItems, expenseItems } = this.props;

    const incomeTotal = calculateSum(incomeItems);
    const expenseTotal = calculateSum(expenseItems);
    const difference = incomeTotal - expenseTotal;

    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Summary</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Total Income</h6>
                <p>{ formatCurrency(incomeTotal) }</p>
              </div>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Total Expense</h6>
                <p>{ formatCurrency(expenseTotal) }</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-6 text-center'>
                <h6 className='h6 strong'>Left after spending</h6>
                <p>{ formatCurrency(difference) }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

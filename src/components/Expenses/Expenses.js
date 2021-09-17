import React,{useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

const [filteredYear,setFilteredYear] = useState('0');

const fitlerChangeHandler = selectedYear => {
  setFilteredYear(selectedYear);
}

const filteredExpenses= props.items.filter(expense=>{
  return expense.date.getFullYear().toString()=== filteredYear;
})

  return (
    <div>
      
    <Card className="expenses">
    <ExpensesFilter 
    selected={filteredYear}
    onChangeFilter={fitlerChangeHandler} />
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action generator', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense action generator', () => {
    const action = editExpense({ id: '123', updates: { note: 'new note added'}});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: 'new note added'}
    })
});

test('should setup add expense action object with provided values', () => {
    const expenseData =  { 
        description: 'Gas',
        note: 'Gas bill it is',
        amount: 2000,
        createdAt: '1000' 
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: '0',
            id: expect.any(String) 
        }
    })
});
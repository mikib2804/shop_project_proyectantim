import { useRef } from 'react';

const AddUser = ({newUser, setnewUser, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add User</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newUser}
                //change state
                onChange={(e) => setnewUser(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
                //shifts the focuses the button after a click
                onClick={() => inputRef.current.focus()}
            >
            </button>
        </form>
    )
}

export default AddUser
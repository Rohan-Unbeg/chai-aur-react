redux summary

every app has only one store
 - single source of truth
 - it should be aware of all reducers
  |
  ->
then first make reducers 
 - we say features as slice (naming convention)
 - to create slice - createSlice
    - to create it we need 3 things
        1. name eg. - todo
        2. initialState - some data structure eg. []
        3. reducers - list which is gonna be working
            - is an object (key: function(state, action))
              - state - updated value in store
              - action - we get action.payload

- export individual functions
- export reducers main source - slice


component 
 - send - useDispatch
 - get - useSelector  - eg: useSelector(state => state.todos)


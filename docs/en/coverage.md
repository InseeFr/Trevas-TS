# VTL tools

## JavaScript interpretor

### Functional converage

#### VTL-ML - General purpose operators

| Name                              | Symbol | Supported |
| --------------------------------- | :----- | :-------: |
| Parentheses                       | ( )    |           |
| Persistent assignment             | <-     |           |
| Non-persistent assignment         | :=     |           |
| Membership                        | #      |           |
| User-defined operator call        |        |           |
| Evaluation of an external routine | eval   |           |
| Type conversion                   | cast   |           |

#### VTL-ML - Join operators

| Name | Symbol                                       | Supported |
| ---- | :------------------------------------------- | :-------: |
| Join | inner_join, left_join, full_join, cross_join |           |

#### VTL-ML - String operators

| Name                       | Symbol             | Supported |
| -------------------------- | :----------------- | :-------: |
| String concatenation       | &#124;&#124;       |           |
| Whitespace removal         | trim, rtrim, ltrim |           |
| Character case conversion  | upper/lower        |           |
| Sub-string extraction      | substr             |           |
| String pattern replacement | replace            |           |
| String pattern location    | instr              |           |
| String length              | length             |           |

#### VTL-ML - Numeric operators

| Name              | Symbol | Supported |
| ----------------- | :----- | :-------: |
| Unary plus        | +      |           |
| Unary minus       | -      |           |
| Addition          | +      |           |
| Subtraction       | -      |           |
| Multiplication    | \*     |           |
| Division          | /      |           |
| Modulo            | mod    |           |
| Rounding          | round  |           |
| Truncation        | trunc  |           |
| Ceiling           | ceil   |           |
| Floor             | floor  |           |
| Absolute value    | abs    |           |
| Exponential       | exp    |           |
| Natural logarithm | ln     |           |
| Power             | power  |           |
| Logarithm         | log    |           |
| Square root       | sqrt   |           |

#### VTL-ML - Comparison operators

| Name             | Symbol           | Supported |
| ---------------- | :--------------- | :-------: |
| Equal to         | =                |           |
| Not equal to     | <>               |           |
| Greater than     | > >=             |           |
| Less than        | < <=             |           |
| Between          | between          |           |
| Element of       | in / not_in      |           |
| Match characters | match_characters |           |
| Is null          | isnull           |           |
| Exists in        | exists_in        |           |

#### VTL-ML - Boolean operators

| Name                  | Symbol | Supported |
| --------------------- | :----- | :-------: |
| Logical conjunction   | and    |           |
| Logical disjunction   | or     |           |
| Exclusive disjunction | xor    |           |
| Logical negation      | not    |           |

#### VTL-ML - Time operators

| Name             | Symbol           | Supported |
| ---------------- | :--------------- | :-------: |
| Period indicator | period_indicator |           |
| Fill time series | fill_time_series |           |
| Flow to stock    | flow_to_stock    |           |
| Stock to flow    | stock_to_flow    |           |
| Time shift       | timeshift        |           |
| Time aggregation | time_agg         |           |
| Actual time      | current_date     |           |

#### VTL-ML - Set operators

| Name                 | Symbol    | Supported |
| -------------------- | :-------- | :-------: |
| Union                | union     |           |
| Intersection         | intersect |           |
| Set difference       | setdiff   |           |
| Symmetric difference | symdiff   |           |

#### VTL-ML - Hierarchical aggregation

| Name                 | Symbol    | Supported |
| -------------------- | :-------- | :-------: |
| Hierarchical roll-up | hierarchy |           |

#### VTL-ML - Aggregate and Analytic operators

| Name                               | Symbol          | Supported |
| ---------------------------------- | :-------------- | :-------: |
| Aggregate invocation               |                 |           |
| Analytic invocation                |                 |           |
| Counting the number of data points | count           |           |
| Minimum value                      | min             |           |
| Maximum value                      | max             |           |
| Median value                       | median          |           |
| Sum                                | sum             |           |
| Average value                      | avg             |           |
| Population standard deviation      | stddev_pop      |           |
| Sample standard deviation          | stddev_samp     |           |
| Population variance                | var_pop         |           |
| Sample variance                    | var_samp        |           |
| First value                        | first_value     |           |
| Last value                         | last_value      |           |
| Lag                                | lag             |           |
| lead                               | lead            |           |
| Rank                               | rank            |           |
| Ratio to report                    | ratio_to_report |           |

#### VTL-ML - Data validation operators

| Name            | Symbol          | Supported |
| --------------- | :-------------- | :-------: |
| Check datapoint | check_datapoint |           |
| Check hierarchy | check_hierarchy |           |
| Check           | check           |           |

#### VTL-ML - Conditional operators

| Name         | Symbol       | Supported |
| ------------ | :----------- | :-------: |
| If Then Else | if-then-else |           |
| Nvl          | nvl          |           |

#### VTL-ML - Clause operators

| Name                       | Symbol  | Supported |
| -------------------------- | :------ | :-------: |
| Filtering Data Points      | filter  |           |
| Calculation of a Component | calc    |           |
| Aggregation                | aggr    |           |
| Maintaining Components     | keep    |           |
| Removal of Components      | drop    |           |
| Change of Component name   | rename  |           |
| Pivoting                   | pivot   |           |
| Unpivoting                 | unpivot |           |
| Subspace                   | sub     |           |

import React, {useEffect, useState} from "react";
import {Menu, Dropdown, Table, message, Row, Skeleton} from 'antd'
import {connect} from 'react-redux'
import './TableMain.scss'
import {fetchTable} from "../../redux/Table/TableAction";
import {actionHide, actionOpen, addChosen, removeChosen, onSelectChange} from "../../redux/actionBar/actionBarAction";
import Space from "antd/es/space";
import InfiniteScroll from 'react-infinite-scroller'
// import SkeletonTable from "../../components/SkeletonTable/SkeletonTable";
// import InfiniteScroll from 'react-infinite-scroll-component'

const menu = (
    <Menu className='actionDrop'>
        <Menu.Item>
            <span className='edit'>
                <svg><use href="#edit" xlinkHref="#edit"/></svg>
                Редактировать
            </span>
        </Menu.Item>
        <Menu.Item>
            <span className='checkbox'>
                <svg><use href="#checkbox" xlinkHref="#checkbox"/></svg>
                Выполнить заказ
            </span>
        </Menu.Item>
        <Menu.Item className='status'>
            <span>
                <svg><use href="#lightning" xlinkHref="#lightning"/></svg>
                Сменить статус
            </span>
        </Menu.Item>
        <Menu.Item className='box'>
            <span>
                <svg><use href="#boxes" xlinkHref="#boxes"/></svg>
                Положить в коробку
            </span>
        </Menu.Item>
        <Menu.Item className='airplane'>
            <span>
                <svg><use href="#airplane" xlinkHref="#airplane"/></svg>
                Выбрать рейс
            </span>
        </Menu.Item>
        <Menu.Item className='print'>
            <span>
                <svg><use href="#PrintIcon" xlinkHref="#PrintIcon"/></svg>
                Распечатать
            </span>
        </Menu.Item>
        <Menu.Item className='addProd'>
            <span>
                <svg><use href="#plusCircle" xlinkHref="#plusCircle"/></svg>
                Добавить товар
            </span>
        </Menu.Item>
        <Menu.Item className='credit'>
            <span>
                <svg><use href="#creditCard" xlinkHref="#creditCard"/></svg>
                Внести оплату
            </span>
        </Menu.Item>
        <Menu.Item className='finance'>
            <span>
                <svg><use href="#finance" xlinkHref="#finance"/></svg>
                Выставить счет
            </span>
        </Menu.Item>
        <Menu.Item className='sms'>
            <span>
                <svg><use href="#chat" xlinkHref="#chat"/></svg>
                Отправить SMS
            </span>
        </Menu.Item>
        <Menu.Item className='cargo'>
            <span>
                <svg><use href="#kargoIcon" xlinkHref="#kargoIcon"/></svg>
                Добавить карго
            </span>
        </Menu.Item>
        <Menu.Item className='delete'>
            <span>
                <svg><use href="#deleteIcon" xlinkHref="#deleteIcon"/></svg>
                Удалить заказ
            </span>
        </Menu.Item>
    </Menu>
);

const columns = [
    {
        title: 'тип',
        dataIndex: 'type',
    },
    {
        title: 'id номер',
        dataIndex: 'id',
        sorter: (a, b) => a.number - b.number
    },
    {
        title: 'откуда',
        dataIndex: 'transmitter',
    },
    {
        title: 'куда',
        dataIndex: 'recipient',
    },
    {
        title: 'коробка',
        dataIndex: 'box',
    },
    {
        title: 'рейс',
        dataIndex: 'flightNum',
    },
    {
        title: 'сумма',
        dataIndex: 'summary',
    },
    {
        title: 'брутто',
        dataIndex: 'brutto',
    },
    {
        title: 'сбор',
        dataIndex: 'collection',
    },
    {
        title: 'карго',
        dataIndex: 'cargo',
    },
    {
        title: 'статус',
        dataIndex: 'status',
    },
    {
        title: '',
        dataIndex: 'action',
        render: () => (
            <Space size="middle">
                <Dropdown className='tableActionDots' overlay={menu} arrow placement='bottomRight' trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <div className='dots'><span/></div>
                    </a>
                </Dropdown>
            </Space>
        ),
    }
];

const TableMain = ({loading, chosen, onSelectChange, hasMore, removeChosen, actionOpen, actionHide, data, fetchTable, loggedIn}) => {


    const [products, setProducts] = useState( [data]);

    const [pageNumber, setPageNumber] = useState(2);


    console.log(products);


    // products.map(item => Object.values(item).push({
    //     key: item.id,
    //     type: <svg>
    //         <use href="#cart" xlinkHref="#cart"/>
    //     </svg>,
    //     number: 21379821 + item.id,
    //     id: <div className='id'><span className='idUp'>10</span><span className='idDown'>{21379821 + item.id}</span>
    //     </div>,
    //     transmitter: <div className='transmitter'><span className='transmitterPlace'>США, Детройт</span><span
    //         className='transmitterName'>Аъзам Махмудов</span></div>,
    //     recipient: <div className='recipient'><span className='transmitterPlace'>США, Детройт</span><span
    //         className='transmitterName'>Аъзам Махмудов</span></div>,
    //     box: <span className='box'>B0000001</span>,
    //     flightNum: <div className='flightNum'><span>JFK00001</span><span>25.05.2020</span></div>,
    //     summary: <span className='summary sum-success'>$5000</span>,
    //     brutto: <div className='brutto'><span>16</span><span>/2кг</span></div>,
    //     collection: <div className='collection collection-error'>$196</div>,
    //     cargo: <div className='cargo'>
    //         <svg>
    //             <use href="#kargoIcon" xlinkHref="#kargoIcon"/>
    //         </svg>
    //         <span className='cargoText'>5</span></div>,
    //     status: <span className='status status-travel'>Оформление</span>,
    //     action: ''
    // }));

    // products.map(item => console.log(item, "item"))


    const handleStatus = (status) => {
        switch (status) {
            case  '0':
                return 'fillPrimary';
            case  '1':
                return 'outlinePrimary';
            case  '2':
                return 'travel';
            case  '3':
                return 'danger';
            case  '4':
                return 'success';
            case  '5':
                return 'violet';
            case  '6':
                return 'primary';
            case  '7':
                return 'outlineWarning';
            case  '8':
                return 'info';
            case  '9':
                return 'outlineSuccess';
            default:
                return status
        }
    };

    const handleType = type => {
        switch (type) {
            case 'e-commerce':
                return 'cart';
            case 'office':
                return 'office';
            case 'truck':
                return 'truck';
            case 'fedex':
                return 'fedex';
            default:
                return type
        }
    };

    //
    // if (products.length === 0) {
    //     return (
    //         <SkeletonTable/>
    //         // <span className="spinner spinner-lg spinner-primary spinnerLoader"></span>
    //     )
    // }


    // const onSelectChange = (selectedRowKeys, selectedRows) => {
    //     console.log(selectedRows);
    //     addChosen(selectedRows);
    // };

    const handleInfiniteOnLoad = () => {

        setTimeout(() => {
            setPageNumber(pageNumber + 1);
            fetchTable(pageNumber);
            setProducts([...products, data])
        }, 1000)
    };

    const rowSelection = {
        chosen,
        onChange: onSelectChange
    };


    return (
        <>
            <Table columns={columns} className='MainTable headerTable' dataSource={undefined}
                   style={{marginTop: '80px'}}/>

            <InfiniteScroll
                initialLoad={false}
                loadMore={handleInfiniteOnLoad}
                hasMore={!loading}
                loader={ <p style={{marginBottom: '50px', position: 'absolute', zIndex: '100'}}>
                    <Skeleton.Input active size='default'  />
                    Loadingg.....
                </p>}
                threshold={30}
                style={{height: '600px'}}
            >
                {
                    products && products.map(product => product && Object.keys(product).map(key => {
                        return (
                            <Table pagination={false} className='MainTable' rowSelection={rowSelection}
                                   columns={columns} title={() => key} showHeader={false}
                                   dataSource={product[key]}/>
                        )
                    }))

                }
            </InfiniteScroll>
        </>
    );


    // return (
    //     <Table className="MainTable">
    //         <thead>
    //         <tr>
    //             <th className='tableCheckboxHeader'>
    //                 <UICheckBox/>
    //             </th>
    //             <th>тип</th>
    //             <th>id номер</th>
    //             <th>откуда</th>
    //             <th>куда</th>
    //             <th>коробка</th>
    //             <th>рейс</th>
    //             <th>сумма</th>
    //             <th>брутто</th>
    //             <th>сбор</th>
    //             <th>карго</th>
    //             <th>статус</th>
    //             <th/>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {
    //             data
    //             &&
    //             data.map(row => {
    //
    //                 return (
    //                     <tr key={row.id}>
    //                         <td>
    //                             <UICheckBox
    //                                 handleToggle={() => handleChange(row.id)}
    //                             />
    //                         </td>
    //                         <td>
    //                             <svg>
    //                                 <use href={`#${handleType(row.type)}`} xlinkHref={`#${handleType(row.type)}`}></use>
    //                             </svg>
    //                         </td>
    //                         <td>
    //                             {row.id}
    //                             <p className='id'>{row.bar_code}</p>
    //                         </td>
    //                         <td>
    //                             {row.from}
    //                             <p className='nameSender'>{row.transmitter}</p>
    //                         </td>
    //                         <td>
    //                             {row.to}
    //                             <p className='nameRecipient'>{row.recipient}</p>
    //                         </td>
    //                         <td>
    //                             <span className='boxNumber'>{row.box_number}</span>
    //                         </td>
    //                         <td>
    //                             {row.flight_number}
    //                             <p className='dataFlight'>{row.flight_date}</p>
    //                         </td>
    //                         <td>
    //                             <span className='price-success'>${row.sum}</span>
    //                         </td>
    //                         <td>
    //                             {row.weight}
    //                             <span className='bruttoActive'/>
    //                         </td>
    //                         <td>
    //                             <span className='collection-error'>${row.collection}</span>
    //                         </td>
    //                         <td className='cargo'>
    //                             <svg className="cargoIcon">
    //                                 <use href="#kargoIcon" xlinkHref="#kargoIcon"></use>
    //                             </svg>
    //                             <span className='cargoText'>{row.cargo}</span>
    //                         </td>
    //                         <td>
    //                             <span className={`status status-${handleStatus(row.status_code)}`}>
    //                                 {row.status_name}
    //                             </span>
    //                         </td>
    //                         <td>
    //                             <div className='dots'>
    //                                 <span/>
    //                             </div>
    //                         </td>
    //                     </tr>
    //                 )
    //             })
    //         }
    //         </tbody>
    //     </Table>
    // )

};

const mapStateToProps = (state) => {
    return {
        data: state.table.data,
        loading: state.table.loading,
        checked: state.table.checked,
        dataSecond: state.table.dataSecond,
        chosen: state.action.chosen,
        hasMore: state.table.hasMore,
        loggedIn: state.auth.loggedIn,
    }
};

export default connect(mapStateToProps, {
    actionOpen,
    actionHide,
    addChosen,
    removeChosen,
    onSelectChange,
    fetchTable
})(TableMain)

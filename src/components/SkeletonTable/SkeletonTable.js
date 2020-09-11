import React from "react";
import {Row, Skeleton, Space} from "antd";

const SkeletonTable = () => {
    return(
        <Space align='vertical' style={{backgroundColor: 'red', zIndex: '100'}}>
            <Row>
                <Skeleton.Input active size='default'  />
                <Skeleton.Input active size='default'  />
                <Skeleton.Input active size='default'  />
                <Skeleton.Input active size='default'  />
            </Row>
        </Space>
    )
};

export default SkeletonTable;
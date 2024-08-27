import { useIssueMutation, useStateQuery } from '@/redux/apiSlices/webSlice';
import { Button, ConfigProvider, DatePicker, Form, Input, Modal, Select } from 'antd'
import React from 'react'
import toast from 'react-hot-toast';
import { CiCalendarDate } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { MoonLoader } from 'react-spinners';

interface IIssueProps{
    open: boolean; 
    setOpen: (open: boolean) => void
}


const IssueModal: React.FC<IIssueProps> = ({open, setOpen}) => {
    const [issue, {isLoading}] = useIssueMutation()
    const {data: states} = useStateQuery(undefined);

    


    const handleSubmit = async (values: any) => {
        const result:any = await issue(values);
        if (result?.data?.success === true) {
            toast.success(result?.data?.message);
            setOpen(false)
        }

        if(result?.error?.data?.message){
            toast.error(result?.error?.data?.message);
        }
    };

    return (
        <div>
            <Modal
                title={<p className='text-2xl -mt-2'>Help us understand you better</p>}
                open={open}
                onClose={()=>setOpen(false)}
                onCancel={()=>setOpen(false)}
                footer
                width={600}
            >

                <ConfigProvider
                    theme={{
                        token: {
                            colorBgContainer: "transparent",
                            colorTextPlaceholder: "#838383",
                            borderRadius: 8,
                            colorPrimaryHover: "#d9d9d9",
                            colorPrimary: "#d9d9d9",
                        },
                    }}
                >
                    <Form layout="vertical" onFinish={handleSubmit} className="grid grid-cols-12 gap-6 mt-6">
                        <Form.Item
                            name="state"
                            rules={[{ required: true, message: "Please Select Any State!" }]}
                            style={{ marginBottom: 0 }}
                            className="col-span-6"
                            label={<p>State</p>}
                        >
                            <Select
                                style={{ height: 40 }}
                                className="w-fit"
                                placeholder={
                                    <p className="font-normal text-[16px] leading-6 text-[#838383]">
                                        Select State
                                    </p>
                                }
                                suffixIcon={<IoIosArrowDown color="#666666" size={20} />}
                            >
                                {
                                    states?.data?.map((state: any, index:number)=>{
                                        return(
                                            <Select.Option key={index} value={state?.name}>{state?.name}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name={"dateOfBirth"}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Pick Date of Birth",
                                }
                            ]}
                            style={{ marginBottom: 0 }}
                            className='col-span-6'
                            label={<p>Date of Birth</p>}
                            valuePropName='dateOfBirth'
                            getValueFromEvent={(value: any) => value.format("YYYY-MM-DD")}
                        >
                            <DatePicker
                                placeholder="Date of Birth"
                                style={{ height: 40, width: "100%" }}
                                format={"YYYY-MM-DD"}
                                suffixIcon={<CiCalendarDate size={24} color='#666666' />}
                            />
                        </Form.Item>

                        <Form.List name="issues" initialValue={["", "", ""]}>
                            {
                                (fields) => (
                                <>
                                    {fields.map((field, index) => (
                                        <Form.Item
                                            {...field}
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[{ required: true, message: "Please enter a feature!" }]}
                                            style={{ marginBottom: 0 }}
                                            key={index}
                                            className="col-span-12"
                                            label={index === 0 ? `Issues (Must 3)` : null} 
                                        >
                                            <Input
                                                placeholder={`Enter Issue ${index + 1}`}
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid #d9d9d9",
                                                    height: 40,
                                                    background: "white",
                                                    borderRadius: "8px",
                                                    outline: "none",
                                                    color: "#838383",
                                                    fontWeight: 400,
                                                    fontSize: "15px",
                                                }}
                                            />
                                        </Form.Item>
                                    ))}
                                </>
                            )}
                        </Form.List>

                        <Form.Item style={{ marginBottom: 0 }} className="col-span-12">
                            <Button
                                htmlType="submit"
                                style={{
                                    background: "#07254A",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    height: 40,
                                    width: "100%",
                                    color: "white",
                                }}
                            >
                                {
                                    isLoading
                                    ? 
                                    
                                    <MoonLoader 
                                        size={25}
                                        color="#ffffff"
                                        loading={true}
                                        aria-label="Loading Spinner"
                                        speedMultiplier={0.7}
                                        data-testid="loader"
                                        
                                    />
                                    : 
                                    "Submit" 
                                }
                            </Button>
                        </Form.Item>
                    </Form>
                </ConfigProvider>

            </Modal>
        </div>
    )
}

export default IssueModal
"use client";

import { useEffect, useState } from "react";
import Switch from "./components/Switch";
import Label from "./components/Label";
import Button from "./components/Button";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import CheckBox from "./components/CheckBox";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import Icon from "./components/Icon";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import Tooltip from "./components/Tooltip";
import Tabs from "./components/Tabs";
import TabsList from "./components/TabsList";
import TabsTrigger from "./components/TabsTrigger";
import TabsContent from "./components/TabsContent";
import Toast from "./components/Toast";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

export default function Home() {

    const [darkMode, setDarkMode] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [open, setOpen] = useState(false);

	useEffect(() => {
		const root= document.documentElement;
		if (darkMode) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [darkMode]);


	return (
		<div className="flex flex-col gap-4 w-fit text-sm">
            <div className="font-medium text-2xl">
                Components Playground
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Switch id="dark-mode" onChange={() => setDarkMode(!darkMode)} disabledColor="Gray" enabledColor="Green"/>
                <Label htmlFor="dark-mode">On/Off Dark Mode</Label>
            </div>
            <div className="flex flex-col w-fit gap-4">
                <Button variant="Normal">Normal</Button>
                <Button variant="Destructive">Destructive</Button>
                <Button variant="Outline">Outline</Button>
                <Button variant="Ghost">Ghost</Button>
                <Button variant="Normal" disabled={true}>Disabled</Button>
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter email" />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
            </div>
            <div className="flex flex-col gap-2">
                <Label htmlFor="textarea">Text Area</Label>
                <TextArea id="textarea" placeholder="Write your message..." rows={4} resize="none"/>
            </div>
            <div>
                <CheckBox label="Check this box"/>
            </div>
            <div>
                <Card header="Card title" footer="Footer text">
                    <p>Hello</p>
                </Card>
            </div>
            <div>
                <Button onClick={() => setShowDialog(true)}>Open Dialog</Button>
                <Dialog
                    open={showDialog}
                    onClose={() => setShowDialog(false)}
                    title="Confirm Delete"
                    actions={
                        <>
                            <Button variant="Ghost" onClick={() => setShowDialog(false)}>Cancel</Button>
                            <Button variant="Destructive" onClick={() => console.log("Deleted")}>Delete</Button>
                        </>
                    }
                >
                    Are you sure you want to delete this item?
                </Dialog>
            </div>
            <div className="">
                <Tooltip content="Information" placement="right">
                    <Icon icon={IconInfoCircleFilled} size={24} color="#212121" />
                </Tooltip>
            </div>
            <div className="">
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                        <TabsTrigger value="billing">Billing</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">
                        Account settings content
                    </TabsContent>

                    <TabsContent value="settings">
                        Settings content
                    </TabsContent>

                    <TabsContent value="billing">
                        Billing content
                    </TabsContent>
                </Tabs>
            </div>
            <div>
                <Button onClick={() => setShowToast(true)}>
				Show Toast
                </Button>

                <Toast
                    open={showToast}
                    onClose={() => setShowToast(false)}
                    message="Saved successfully!"
                    variant="normal"
                />
            </div>
            <div>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    title="User Settings"
                >
                    <p>This is modal content.</p>
                    <p>You can place forms, settings, or large UI here.</p>
                </Modal>
            </div>
            <div>
                <Sidebar>
                    <></>
                </Sidebar>
            </div>
		</div>
	);
}

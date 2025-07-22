import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from ".";
import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { TextArea } from "../../atoms/text-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../atoms/select";

const meta = {
    title: "Components/Molecules/Form",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    bio: z.string().min(10, {
        message: "Bio must be at least 10 characters.",
    }),
    role: z.string().min(1, {
        message: "Please select a role.",
    }),
});

export const Default: Story = {
    render: () => {
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                username: "",
                email: "",
                password: "",
                bio: "",
            },
        });

        function onSubmit(values: z.infer<typeof formSchema>) {
            console.log(values);
        }

        return (
            <div className="w-96 space-y-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your username" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        We'll never share your email with anyone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" showPasswordToggle placeholder="Enter your password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Password must be at least 8 characters long.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="primary" className="w-full">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        );
    },
};

export const WithTextarea: Story = {
    render: () => {
        const bioSchema = z.object({
            bio: z.string().min(10, {
                message: "Bio must be at least 10 characters.",
            }),
        });

        const form = useForm<z.infer<typeof bioSchema>>({
            resolver: zodResolver(bioSchema),
            defaultValues: {
                bio: "",
            },
        });

        function onSubmit(values: z.infer<typeof bioSchema>) {
            console.log(values);
        }

        return (
            <div className="w-96">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <TextArea
                                            placeholder="Tell us about yourself..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Write a short bio about yourself.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="primary">
                            Save Bio
                        </Button>
                    </form>
                </Form>
            </div>
        );
    },
};

export const WithSelect: Story = {
    render: () => {
        const roleSchema = z.object({
            role: z.string().min(1, {
                message: "Please select a role.",
            }),
        });

        const form = useForm<z.infer<typeof roleSchema>>({
            resolver: zodResolver(roleSchema),
        });

        function onSubmit(values: z.infer<typeof roleSchema>) {
            console.log(values);
        }

        return (
            <div className="w-96">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="admin">Admin</SelectItem>
                                                <SelectItem value="user">User</SelectItem>
                                                <SelectItem value="moderator">Moderator</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>
                                        Choose your role in the organization.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="primary">
                            Save Role
                        </Button>
                    </form>
                </Form>
            </div>
        );
    },
};

export const WithErrors: Story = {
    render: () => {
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                username: "",
                email: "invalid-email",
                password: "123",
                bio: "short",
            },
        });

        // Trigger validation errors
        React.useEffect(() => {
            form.trigger();
        }, [form]);

        function onSubmit(values: z.infer<typeof formSchema>) {
            console.log(values);
        }

        return (
            <div className="w-96 space-y-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your username" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        We'll never share your email with anyone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter your password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Password must be at least 8 characters long.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <TextArea placeholder="Tell us about yourself..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Write a short bio about yourself.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" variant="primary" className="w-full">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        );
    },
};

export const LoginForm: Story = {
    render: () => {
        const loginSchema = z.object({
            email: z.string().email({
                message: "Please enter a valid email address.",
            }),
            password: z.string().min(1, {
                message: "Password is required.",
            }),
        });

        const form = useForm<z.infer<typeof loginSchema>>({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        });

        function onSubmit(values: z.infer<typeof loginSchema>) {
            console.log(values);
        }

        return (
            <div className="w-96">
                <div className="text-center mb-6">
                    <h2 className="text-ui-title-base text-text-pr">Sign in to your account</h2>
                    <p className="text-ui-body-sm text-text-sec mt-2">
                        Enter your credentials to access your account
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="name@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-between">
                            <Button variant="ghost" type="button" className="h-auto p-0 text-ui-body-sm">
                                Forgot password?
                            </Button>
                        </div>
                        <Button type="submit" variant="primary" className="w-full">
                            Sign in
                        </Button>
                    </form>
                </Form>
            </div>
        );
    },
};

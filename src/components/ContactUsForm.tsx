'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
    name: z
        .string()
        .min(1, {
            message: 'Your name must be at least 1 character.',
        })
        .regex(/[^0-9]/g, "You can't have numbers in your name, silly!"),
    email: z.string().email('Must provide a valid email address'),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(400, 'Message must be less than 400 characters'),
});

interface ContactUsFormProps {
    submitButtonText: string;
}

export const ContactUsForm = ({ submitButtonText }: ContactUsFormProps) => {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // ✅ This will be type-safe and validated.
        setSubmitting(true);

        const formData = new FormData();
        for (const key in values) {
            formData.append(key, values[key as keyof typeof values]);
        }

        try {
            const response = await fetch(
                `https://getform.io/f/${process.env.NEXT_PUBLIC_GETFORM_ID}`,
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );
            setSubmitting(false);
            if (response.status === 200 && response.ok) {
                toast({
                    title: 'Form submitted',
                    description: "We'll get back to you soon!",
                });
                setSubmitted(true);
            } else {
                toast({
                    title: 'Form submission error',
                    description:
                        'There was an issue in submitting your form. Please try again later.',
                    variant: 'destructive',
                });
                setSubmitted(false);
            }
        } catch (err) {
            toast({
                title: 'Form submission error',
                description: 'There was an issue in submitting your form. Please try again later.',
                variant: 'destructive',
            });
            setSubmitted(false);
        }
    };

    return (
        <div className={'w-full'}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div
                        className={'flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'}
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className={'w-full md:w-4/5'}>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormDescription>What should we call you?</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className={'w-full'}>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormDescription>Where should we contact you?</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Requirements, intentions, target audience, goals, budget, etc."
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>Tell us about the project</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        title={'submitButtonText'}
                        type={'submit'}
                        disabled={submitted || submitting}
                    >
                        {submitButtonText}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

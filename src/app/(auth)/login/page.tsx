'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/cypresslogo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Form, SubmitHandler, useForm } from 'react-hook-form';
import { FormSchema } from '@/lib/types';
import { FormDescription } from '@/components/ui/form';

const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');
    const form = useForm<z.infer<typeof FormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(FormSchema),
        defaultValues: { email: '', password: '' },
    });
    const isLoading = form.formState.isSubmitting;
    const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
        formData
    ) => {

    };
    return (
        <Form {...form}>
            <form
                onChange={() => {
                    if (submitError) setSubmitError('');
                }}
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col">
                <Link
                    href='/'
                    className="w-full flex justify-left items-center"
                >
                    <Image
                        src={Logo}
                        alt="cypress Logo"
                        width={50}
                        height={50}
                    />
                    <span
                        className="font-semibold dark:text-white text-4xl first-letter:ml-2">
                        cypress.
                    </span>
                </Link>
                <FormDescription className="text-foreground/60">
                Collaboration and Productivity Platform
                </FormDescription>
            </form>
        </Form>
    )
}

export default LoginPage
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.info("event:contact_submit", Object.fromEntries(formData.entries()));
  }, []);

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-brand-navy/10 bg-white/95 p-6 shadow-soft"
    >
      <div>
        <label className="text-sm font-semibold text-brand-navy" htmlFor="name">
          学生姓名
        </label>
        <Input id="name" name="name" required placeholder="请输入姓名" className="mt-2" />
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy" htmlFor="grade">
          年级
        </label>
        <Input id="grade" name="grade" placeholder="如：G10" className="mt-2" />
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy" htmlFor="goal">
          目标院校 / 项目
        </label>
        <Input id="goal" name="goal" placeholder="请输入目标" className="mt-2" />
      </div>
      <div>
        <label className="text-sm font-semibold text-brand-navy" htmlFor="contact">
          联系方式
        </label>
        <Input id="contact" name="contact" required placeholder="邮箱或电话" className="mt-2" />
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90">
        发送信息
      </Button>
    </form>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import { Layout } from "@/components/common"
import Clock from '@/components/clock/Clock'

export default function Home() {
  return (
    <section>
      <Clock />
    </section>
  )
}

Home.Layout = Layout

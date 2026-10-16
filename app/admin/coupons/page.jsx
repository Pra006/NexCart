'use client'

import { useEffect, useState } from "react"
import Title from "@/components/Title"
import { format } from "date-fns"
import toast from "react-hot-toast"
import { Trash2Icon, TicketPercentIcon, PlusIcon } from "lucide-react"
import { COUPONS_DATA } from "@/assets/assets"

const AdminCoupons = () => {
    const [coupons, setCoupons] = useState([])
    const [form, setForm] = useState({
        code: '', description: '', discount: '',
        forNewUser: false, forMember: false,
        isPublic: false, // Default false - admin decides
        expiresAt: format(new Date(), 'yyyy-MM-dd')
    })

    const fetchCoupons = async () => {
setCoupons(COUPONS_DATA)
    }

    const handleAdd = async (e) => {
        e.preventDefault()
        console.log(form)
    }

    const deleteCoupon = async (code) => {
        console.log(code)
    }

    useEffect(() => {
       fetchCoupons()
    }, [])

    return (
        <div className="space-y-10">
            <Title headingStart="Coupon" headingEnd="Manager" subtext="Platform discounts" hasAction={false} />

            <div className="grid lg:grid-cols-3 gap-10">
                {/* LEFT SIDE - ADD COUPON */}
                <form onSubmit={handleAdd} className="rounded-4xl border border-base-300 p-8 space-y-4 h-fit">
                    <h6 className="font-bold uppercase opacity-50 mb-4 flexStart gap-2"><PlusIcon size={16} /> New Coupon</h6>
                    <input value={form.code} onChange={e => setForm({ ...form, code: e.target.value.toUpperCase() })} placeholder="CODE" className="input input-bordered w-full rounded-xl" required />
                    <div className="grid grid-cols-2 gap-2">
                        <input type="number" name="discount" value={form.discount} onChange={e => setForm({ ...form, discount: e.target.value })} placeholder="Disc %" className="input input-bordered rounded-xl" required />
                        <input type="date" value={form.expiresAt} onChange={e => setForm({ ...form, expiresAt: e.target.value })} className="input input-bordered rounded-xl" required />
                    </div>

                    <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="textarea textarea-bordered w-full rounded-xl" placeholder="Description..." required />

                    <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase opacity-50">Requirements</p>
                        {[
                            { key: 'forNewUser', label: 'For New Users', desc: 'User with no previous orders' },
                            { key: 'forMember', label: 'For Members', desc: 'User must have Premium plan' },
                            { key: 'isPublic', label: 'Show in Banner', desc: 'Display publicly on site' },
                        ].map(({ key, label, desc }) => (
                            <label key={key} className="flexBetween bg-base-200/50 p-3 rounded-xl cursor-pointer">
                                <div>
                                    <p className="text-[10px] font-bold uppercase">{label}</p>
                                    <p className="text-[10px] opacity-50">{desc}</p>
                                </div>
                                <input type="checkbox" className="toggle toggle-primary toggle-sm" checked={form[key]} onChange={e => setForm({ ...form, [key]: e.target.checked })} />
                            </label>
                        ))}
                        {form.forNewUser && form.forMember && (
                            <p className="text-[10px] opacity-40 text-center py-1">⚠️ User must meet both requirements</p>
                        )}
                        {!form.forNewUser && !form.forMember && (
                            <p className="text-[10px] opacity-40 text-center py-1">⚠️ No requirements — anyone can use this coupon</p>
                        )}
                    </div>
                    <button className="btn btn-primary btn-block rounded-2xl">Add Coupon</button>
                </form>

                {/* RIGHT SIDE - COUPON LIST */}
                <div className="lg:col-span-2 overflow-x-auto rounded-3xl border border-base-300">
                    <table className="table w-full">
                        <thead className="bg-base-200/50 uppercase text-[10px] tracking-widest opacity-60">
                            <tr>
                                <th>Code</th>
                                <th>Discount</th>
                                <th>Expires</th>
                                <th>Audience</th>
                                <th>Privacy</th>
                                <th className="text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="uppercase text-[10px] tracking-widest">
                            {coupons.map((c) => (
                                <tr key={c.code} className="hover:bg-base-200/30">
                                    <td>
                                        <div className="flexStart gap-3">
                                            <TicketPercentIcon size={18} className="text-primary" />
                                            <div>
                                                <p className="font-bold text-xs">{c.code}</p>
                                                <p className="text-[10px] opacity-50 truncate w-32">{c.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold text-success">{c.discount}%</td>
                                    <td className="text-[10px] opacity-60">{format(new Date(c.expiresAt), 'MMM dd, yyyy')}</td>
                                    <td>
                                        {c.forNewUser && <div className="badge badge-ghost badge-xs">NEW USER</div>}
                                        {c.forMember && <div className="badge badge-ghost badge-xs">MEMBER</div>}
                                        {!c.forNewUser && !c.forMember && <div className="badge badge-ghost badge-xs">ALL</div>}
                                    </td>
                                    <td><div className="badge badge-primary badge-xs">{c.isPublic ? 'PUBLIC' : 'PRIVATE'}</div></td>
                                    <td className="text-right">
                                        <button onClick={() => deleteCoupon(c.code)} className="btn btn-ghost btn-xs text-error btn-circle"><Trash2Icon size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminCoupons
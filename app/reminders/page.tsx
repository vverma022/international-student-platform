"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { format } from "date-fns"
import { Bell, CalendarIcon, Clock, Trash2, Plus } from "lucide-react"

export default function RemindersPage() {
  const [date, setDate] = useState<Date>()
  const [reminders, setReminders] = useState([
    {
      id: "1",
      title: "Visa Expiration",
      description: "Your student visa will expire soon",
      date: new Date(2025, 5, 15),
      type: "visa",
      active: true,
    },
    {
      id: "2",
      title: "FRRO Registration Renewal",
      description: "Your FRRO registration needs to be renewed",
      date: new Date(2025, 3, 10),
      type: "registration",
      active: true,
    },
    {
      id: "3",
      title: "Medical Insurance Renewal",
      description: "Your health insurance policy is expiring",
      date: new Date(2025, 7, 22),
      type: "medical",
      active: true,
    },
  ])

  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    type: "visa",
    date: new Date(),
    active: true,
  })

  const handleAddReminder = () => {
    if (newReminder.title && date) {
      setReminders([
        ...reminders,
        {
          id: (reminders.length + 1).toString(),
          title: newReminder.title,
          description: newReminder.description,
          date: date,
          type: newReminder.type,
          active: true,
        },
      ])
      setNewReminder({
        title: "",
        description: "",
        type: "visa",
        date: new Date(),
        active: true,
      })
      setDate(undefined)
    }
  }

  const toggleReminder = (id: string) => {
    setReminders(
      reminders.map((reminder) => (reminder.id === id ? { ...reminder, active: !reminder.active } : reminder)),
    )
  }

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id))
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "visa":
        return "bg-blue-100 text-blue-800"
      case "registration":
        return "bg-purple-100 text-purple-800"
      case "medical":
        return "bg-green-100 text-green-800"
      case "academic":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const sortedReminders = [...reminders].sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Document Renewal Reminders</h1>
          <p className="text-gray-500 mt-2">
            Set up automatic notifications for important document renewals and deadlines.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Reminder
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Reminder</DialogTitle>
              <DialogDescription>Set up a reminder for important document renewals or deadlines.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Reminder Title</Label>
                <Input
                  id="title"
                  value={newReminder.title}
                  onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                  placeholder="e.g., Visa Renewal"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newReminder.description}
                  onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
                  placeholder="Add details about this reminder"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Document Type</Label>
                <Select
                  value={newReminder.type}
                  onValueChange={(value) => setNewReminder({ ...newReminder, type: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="registration">Registration</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddReminder}>Save Reminder</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedReminders.map((reminder) => (
          <Card key={reminder.id} className={reminder.active ? "" : "opacity-60"}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-blue-500" />
                    {reminder.title}
                  </CardTitle>
                  <CardDescription>{reminder.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={reminder.active} onCheckedChange={() => toggleReminder(reminder.id)} />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteReminder(reminder.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-gray-500">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{format(reminder.date, "PPP")}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>
                    {Math.ceil((reminder.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-1">
              <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(reminder.type)} capitalize`}>
                {reminder.type}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      {reminders.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No reminders set</h3>
          <p className="text-gray-500 mb-6">You haven't created any document reminders yet.</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create Your First Reminder</Button>
            </DialogTrigger>
            <DialogContent>{/* Same content as above */}</DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  )
}

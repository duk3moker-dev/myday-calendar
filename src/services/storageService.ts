import { Task, Goal, Note, Reminder, Event, UserSettings } from '@/types';

class StorageService {
  private prefix = 'myday_';

  // Tasks
  getTasks(userId: string): Task[] {
    const key = `${this.prefix}tasks_${userId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  saveTask(userId: string, task: Task): void {
    const tasks = this.getTasks(userId);
    const index = tasks.findIndex(t => t.id === task.id);
    if (index >= 0) {
      tasks[index] = task;
    } else {
      tasks.push(task);
    }
    const key = `${this.prefix}tasks_${userId}`;
    localStorage.setItem(key, JSON.stringify(tasks));
  }

  deleteTask(userId: string, taskId: string): void {
    const tasks = this.getTasks(userId);
    const filtered = tasks.filter(t => t.id !== taskId);
    const key = `${this.prefix}tasks_${userId}`;
    localStorage.setItem(key, JSON.stringify(filtered));
  }

  // Goals
  getGoals(userId: string): Goal[] {
    const key = `${this.prefix}goals_${userId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  saveGoal(userId: string, goal: Goal): void {
    const goals = this.getGoals(userId);
    const index = goals.findIndex(g => g.id === goal.id);
    if (index >= 0) {
      goals[index] = goal;
    } else {
      goals.push(goal);
    }
    const key = `${this.prefix}goals_${userId}`;
    localStorage.setItem(key, JSON.stringify(goals));
  }

  deleteGoal(userId: string, goalId: string): void {
    const goals = this.getGoals(userId);
    const filtered = goals.filter(g => g.id !== goalId);
    const key = `${this.prefix}goals_${userId}`;
    localStorage.setItem(key, JSON.stringify(filtered));
  }

  // Notes
  getNotes(userId: string): Note[] {
    const key = `${this.prefix}notes_${userId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  saveNote(userId: string, note: Note): void {
    const notes = this.getNotes(userId);
    const index = notes.findIndex(n => n.id === note.id);
    if (index >= 0) {
      notes[index] = note;
    } else {
      notes.push(note);
    }
    const key = `${this.prefix}notes_${userId}`;
    localStorage.setItem(key, JSON.stringify(notes));
  }

  deleteNote(userId: string, noteId: string): void {
    const notes = this.getNotes(userId);
    const filtered = notes.filter(n => n.id !== noteId);
    const key = `${this.prefix}notes_${userId}`;
    localStorage.setItem(key, JSON.stringify(filtered));
  }

  // Reminders
  getReminders(userId: string): Reminder[] {
    const key = `${this.prefix}reminders_${userId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  saveReminder(userId: string, reminder: Reminder): void {
    const reminders = this.getReminders(userId);
    const index = reminders.findIndex(r => r.id === reminder.id);
    if (index >= 0) {
      reminders[index] = reminder;
    } else {
      reminders.push(reminder);
    }
    const key = `${this.prefix}reminders_${userId}`;
    localStorage.setItem(key, JSON.stringify(reminders));
  }

  deleteReminder(userId: string, reminderId: string): void {
    const reminders = this.getReminders(userId);
    const filtered = reminders.filter(r => r.id !== reminderId);
    const key = `${this.prefix}reminders_${userId}`;
    localStorage.setItem(key, JSON.stringify(filtered));
  }

  // Events
  getEvents(userId: string): Event[] {
    const key = `${this.prefix}events_${userId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  saveEvent(userId: string, event: Event): void {
    const events = this.getEvents(userId);
    const index = events.findIndex(e => e.id === event.id);
    if (index >= 0) {
      events[index] = event;
    } else {
      events.push(event);
    }
    const key = `${this.prefix}events_${userId}`;
    localStorage.setItem(key, JSON.stringify(events));
  }

  deleteEvent(userId: string, eventId: string): void {
    const events = this.getEvents(userId);
    const filtered = events.filter(e => e.id !== eventId);
    const key = `${this.prefix}events_${userId}`;
    localStorage.setItem(key, JSON.stringify(filtered));
  }

  // Settings
  getSettings(userId: string): UserSettings {
    const key = `${this.prefix}settings_${userId}`;
    const data = localStorage.getItem(key);
    return data
      ? JSON.parse(data)
      : {
          id: Date.now().toString(),
          userId,
          theme: 'light',
          language: 'pt',
          notificationsEnabled: true,
          monthlyPersonalization: true,
          updatedAt: new Date().toISOString(),
        };
  }

  saveSettings(userId: string, settings: UserSettings): void {
    const key = `${this.prefix}settings_${userId}`;
    localStorage.setItem(key, JSON.stringify(settings));
  }
}

export const storageService = new StorageService();
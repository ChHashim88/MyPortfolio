// src/services/contactService.js
import { supabase } from '/src/services/supabase.js'; // Normal anon client

export const insertContactApi = async (data) => {
  try {
    const { data: result, error } = await supabase
      .from('contact')
      .insert([data]);

    if (error) {
      return { success: false, error };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Insert error:', error);
    return { success: false, error };
  }
};

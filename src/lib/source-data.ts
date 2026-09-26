import { supabase } from './supabase'
import type { YearlySourceData } from '../types/database'

/**
 * Get all active years (for dropdown)
 */
export async function getActiveYears() {
  const { data, error } = await supabase
    .from('sumber_data_tahunan')
    .select('*')
    .eq('is_active', true)
    .order('tahun', { ascending: false })

  if (error) {
    console.error('Failed to fetch years:', error.message)
    throw error
  }

  return data as YearlySourceData[]
}

/**
 * Get single data by year
 */
export async function getSourceDataByYear(year: number) {
  const { data, error } = await supabase
    .from('sumber_data_tahunan')
    .select('*')
    .eq('tahun', year)
    .eq('is_active', true)
    .single()

  if (error) {
    console.error(`Failed to fetch data for year ${year}:`, error.message)
    throw error
  }

  return data as YearlySourceData
}

/**
 * Add new year + Google Sheets URL
 */
export async function addSourceData(year: number, sheetUrl: string) {
  const { data, error } = await supabase
    .from('sumber_data_tahunan')
    .insert({
      tahun: year,
      sheet_url: sheetUrl,
      is_active: true,
    })
    .select()
    .single()

  if (error) {
    console.error('Failed to add source data:', error.message)
    throw error
  }

  return data as YearlySourceData
}

/**
 * Update Google Sheets URL by year
 */
export async function updateSourceData(year: number, sheetUrl: string) {
  const { data, error } = await supabase
    .from('sumber_data_tahunan')
    .update({ sheet_url: sheetUrl })
    .eq('tahun', year)
    .select()
    .single()

  if (error) {
    console.error('Failed to update source data:', error.message)
    throw error
  }

  return data as YearlySourceData
}
import { sample_antibody, sample_tags } from '../../data';
import { Antibody } from '../shared/models/food';
import { Injectable } from '@angular/core';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class AntibodyService {

  constructor() { }

  getAll(): Antibody[] {
    return sample_antibody;
  }
  getAllantibodiesBySearchTerm(searchTerm: string) {
    return this.getAll().filter(antibody => antibody.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[]{
    return sample_tags
  }
  getAllAntibodiesByTag(tag: string): Antibody[]{
    return tag == "All" ?
    this.getAll():
    this.getAll().filter(antibody => antibody.tags?.includes(tag));
  }
}

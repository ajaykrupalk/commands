import { Git } from 'src/app/interfaces/git';
import { GitcmdsService } from './../../services/gitcmds.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import copy from 'copy-to-clipboard';

@Component({
  selector: 'app-gitcmd',
  templateUrl: './gitcmd.component.html',
  styleUrls: ['./gitcmd.component.css']
})
export class GitcmdComponent implements OnInit {
  git: Git[] = [];
  isCopiedMap: { [key: string]: boolean } = {};
  searchQuery: string = '';
  filteredGitData: any[] = [];

  constructor(private gitService: GitcmdsService) { }

  ngOnInit() {
    console.log('Git', this.git);
    this.gitService.getGitCmds().subscribe(response => {
      this.git = response;
    }, error => {
      console.log(error);
    });
  }

  copyToClipboard(cmd: string) {
    this.isCopiedMap[cmd] = true;
    copy(cmd)
    interval(1500).subscribe(() => {
      this.isCopiedMap[cmd] = false;
    })
  }

  onSearchChange(): void {
    const searchTerm = this.searchQuery.toLowerCase();

    const filteredCategories = this.git.map(category => {
      const filteredCommands = category.commands.filter(command =>
        command.command.toLowerCase().includes(searchTerm) ||
        command.description.toLowerCase().includes(searchTerm)
      );

      return {
        ...category,
        commands: filteredCommands
      };
    }).filter(category => category.commands.length > 0);

    this.filteredGitData = filteredCategories;
  }
}
